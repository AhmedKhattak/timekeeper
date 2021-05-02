import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { useState } from "react";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import CrossSvg from "../assets/cross.svg";
import PlusIcon from "../assets/plus.svg";
import { useForm } from "react-hook-form";
import { db } from "../database/db";
import { ErrorMessage } from "@hookform/error-message";
import { AnimatePresence, motion } from "framer-motion";

const defaultMaterialTheme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        marginTop: 12,
      },
    },
    MuiDialog: {
      paper: {
        borderRadius: 10,
      },
    },
    MuiButton: {
      label: {
        fontFamily: "Montserrat",
        fontWeight: 600,
      },
    },
    MuiInputBase: {
      input: {
        fontFamily: "Montserrat",
        fontWeight: 600,
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        outline: "none",
        border: "3px solid #EAEAEA",
        borderRadius: 10,
        "&:hover": {
          border: "none",
        },
      },
      root: {
        // "&:focus": {
        //   outline: "none",
        // },
      },
    },
    MuiTypography: {
      body1: {
        fontFamily: "Montserrat",
      },
      body2: {
        fontFamily: "Montserrat",
        fontWeight: 500,
      },
      caption: {
        fontFamily: "Montserrat",
      },
      h1: {
        fontFamily: "Montserrat",
      },
      h2: {
        fontFamily: "Montserrat",
      },
      h3: {
        fontFamily: "Montserrat",
      },
      h4: {
        fontFamily: "Montserrat",
      },
      h5: {
        fontFamily: "Montserrat",
      },
      h6: {
        fontFamily: "Montserrat",
      },
      subtitle1: {
        fontFamily: "Montserrat",
      },
      subtitle2: {
        fontFamily: "Montserrat",
      },

      root: {
        fontFamily: "Montserrat",
      },
    },
  },

  palette: {
    primary: {
      main: "#476D1A",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

interface IAddCardDialog {
  isOpen: boolean;
  onDialogClose: () => void;
}

const defaultValues = {
  cardType: "",
  title: "",
  date: null,
};
export function AddCardDialog({ isOpen, onDialogClose }: IAddCardDialog) {
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const onSubmit = (data) => {
    console.log(data);

    db.timecards.add({
      text: data.title,
      date: data.date,
      cardType: data.cardType,
    });
    reset(defaultValues);
    onDialogClose();
  };
  const cardType = watch("cardType");
  const date = watch("date");

  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ easings: "linear", duration: 0.15 }}
              onClick={() => {
                reset();
                onDialogClose();
              }}
              className="fixed left-0 right-0 top-0 bottom-0 z-[100] bg-[rgba(0,0,0,0.3)] flex flex-col  justify-end m-sm:items-center m-sm:justify-center"
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                className="bg-white pb-20 p-3 pt-5 m-sm:p-5 m-sm:pb-20  m-sm:w-[520px] relative  rounded-tl-[14px] rounded-tr-[14px] m-sm:rounded-bl-[14px] m-sm:rounded-br-[14px]"
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex justify-between font-semibold items-center text-lg border-b-[1px] border-[#D3D3D3] pb-5 pl-5 pr-5">
                    <p>Create a time card</p>
                    <button
                      className="p-1"
                      onClick={() => {
                        reset(
                          {},
                          {
                            keepIsSubmitted: false,
                          }
                        );
                        onDialogClose();
                      }}
                    >
                      <CrossSvg />
                    </button>
                  </div>

                  <p className="font-semibold text-sm mt-4">Card Type</p>
                  <div className="flex mt-3 space-x-2 r">
                    <label
                      className={`flex-1 flex bg-[#F2F5EF] p-3 space-x-3 rounded-[10px] ${
                        cardType === "countUp" && "border-[#059669]"
                      } border-2`}
                    >
                      <input
                        className="transition  form-radio text-[#059669] focus:ring-3 focus:ring-[#059669] mt-[2px]"
                        type="radio"
                        {...register("cardType", { required: true })}
                        name="cardType"
                        value="countUp"
                      />
                      <div>
                        <p className="text-xs xx-sm:text-sm font-semibold mb-1">
                          Count up
                        </p>
                        <p className="text-xs xx-sm:text-sm">
                          The timer will count the time passed since the start
                          date
                        </p>
                      </div>
                    </label>
                    <label
                      className={`flex-1 flex bg-[#F2F5EF] p-3 space-x-3 rounded-[10px] ${
                        cardType === "countDown" && "border-[#059669]"
                      } border-2`}
                    >
                      <input
                        className="transition  form-radio  text-[#059669] focus:ring-3 focus:ring-[#059669]"
                        type="radio"
                        {...register("cardType", { required: true })}
                        name="cardType"
                        value="countDown"
                      />
                      <div>
                        <p className="text-xs xx-sm:text-sm font-semibold mb-1">
                          Count Down
                        </p>
                        <p className="text-xs xx-sm:text-sm">
                          The timer will count the time passed since the start
                          date
                        </p>
                      </div>
                    </label>
                  </div>
                  <p className="text-sm h-3 mt-1 text-red-500 font-medium">
                    {errors.cardType && "This is required"} &nbsp;
                  </p>
                  <p className="font-semibold text-sm mt-4">Card Title</p>
                  <input
                    type="text"
                    {...register("title", {
                      required: true,
                      minLength: 4,
                      // maxLength: 30,
                    })}
                    placeholder="Set Title"
                    className="w-full  m-sm:w-4/5 pl-3 mt-2 h-11 outline-none appearance-none rounded-[10px] transition focus:ring  focus:ring-[#476D1A]   p-2 border-solid  border-[3px]"
                  />

                  <p className="text-sm h-3 mt-1 text-red-500 font-medium">
                    {errors.title && "Min 4 characters required"}
                    &nbsp;
                  </p>

                  <p className="font-semibold text-sm mt-4">Start Date</p>
                  <input
                    readOnly
                    onClick={() => setIsDateModalOpen(true)}
                    type="text"
                    {...register("date", { required: true })}
                    placeholder="Select Date"
                    className="w-full  m-sm:w-4/5 cursor-pointer pl-3 mt-2 h-11 outline-none appearance-none rounded-[10px] transition focus:ring  focus:ring-[#476D1A]   p-2 border-solid  border-[3px]"
                  />
                  <p className="text-sm h-3 mt-1 text-red-500 font-medium">
                    {errors.date && "This is required"} &nbsp;
                  </p>
                  <DatePicker
                    open={isDateModalOpen}
                    onOpen={() => setIsDateModalOpen(true)}
                    onClose={() => setIsDateModalOpen(false)}
                    fullWidth
                    style={{ display: "none" }}
                    inputVariant="outlined"
                    variant="dialog"
                    value={date}
                    onChange={(date) =>
                      setValue("date", date.toDateString(), {
                        shouldValidate: true,
                      })
                    }
                  />
                  <div className="absolute bottom-0 left-0 right-0 rounded-bl-[14px] rounded-br-[14px] flex justify-end p-3 bg-[#F0F3EC]">
                    <button className="pl-5 pr-5 bg-[#476D1A]  h-[44px] rounded-[10px] text-white flex justify-center items-center  text-[16px] ">
                      <PlusIcon className="mr-3" />
                      <span>Create</span>
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}
