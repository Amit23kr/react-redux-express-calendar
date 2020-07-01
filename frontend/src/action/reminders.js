import * as actionTypes from "../constant/action-type";
import axios from "axios";
import { v1 as uniqueId } from "uuid";

// Action creators
const createReminderAction = (reminder) => {
  return {
    type: actionTypes.CREATE_REMINDER,
    reminder: reminder,
  };
};

const updateReminderAction = (reminder) => {
  console.log("updateReminderAction", reminder);
  return {
    type: actionTypes.UPDATE_REMINDER,
    reminder: reminder,
  };
};

const deleteReminderAction = (date, id) => {
  console.log("deleteReminderAction", date, id);
  return {
    type: actionTypes.DELETE_REMINDER,
    date: date,
    id: id,
  };
};

// Actions
export const createReminder = (payload) => (dispatch) => {
  let obj = {
    id: uniqueId(),
    time: payload.time,
    description: payload.description,
    color: payload.color,
    date: payload.date,
  };
  axios
    .post("/calendars/add", obj)
    .then((res) => {
      console.log("res", res.data);
      dispatch(createReminderAction(res.data));
    })
    .catch((err) => console.log(err));
};

export const updateReminder = (payload) => (dispatch) => {
  let obj = {
    id: payload.id,
    time: payload.time,
    description: payload.description,
    color: payload.color,
    date: payload.date,
  };
  axios
    .post("/calendars/add", obj)
    .then((res) => {
      dispatch(updateReminderAction(res.data));
    })
    .catch((err) => console.log(err));
};

export const deleteReminder = (date, id) => (dispatch) => {
  axios
    .delete("/calendars/task/" + id)
    .then((res) => {
      if (res.status) {
        dispatch(deleteReminderAction(date, id));
      }
    })
    .catch((err) => console.log(err));
};
