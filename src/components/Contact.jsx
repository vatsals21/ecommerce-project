import { Button } from "@mui/material";
import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="mt-20 p-3 flex flex-row justify-start">
      <form className="grid grid-cols-4 gap-y-4 gap-x-1">
        <label className="flex flex-row justify-end">First Name: </label>
        <input
          type="text"
          className="border-2 border-stone-400"
          placeholder="first_name"
          id="first_name"
          name="first_name"
          required
        />
        <label className="flex flex-row justify-end">Last Name: </label>
        <input
          type="text"
          className="border-2 border-stone-400"
          placeholder="last_name"
          id="last_name"
          name="last_name"
          required
        />
        <label className="flex flex-row justify-end">Phone #: </label>
        <input
          type="number"
          className="border-2 border-stone-400"
          placeholder="9876543210"
          id="phone"
          name="phone"
          required
        />
        <label className="flex flex-row justify-end">Email Id: </label>
        <input
          type="email"
          className="border-2 border-stone-400"
          placeholder="example@gmail.com"
          id="email_id"
          name="email_id"
          required
        />
        <label className="flex flex-row justify-end">Query: </label>
        <textarea
          // type="textarea"
          className="border-2 border-stone-400 col-span-3"
          placeholder="your query"
          id="query"
          name="query"
          required
        />
        <Button
          variant="contained"
          className="col-start-3 group hover:scale-105 duration-300"
        >
          {/* <input type="submit" value="SUBMIT" /> */}
          SUBMIT &nbsp;
          <FiArrowRightCircle size={18} className="group-hover:skew-y-12" />
        </Button>
      </form>
    </div>
  );
};

export default Contact;
