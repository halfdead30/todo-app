import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/themeReducer";
import formReducer from "./reducers/formReducer";
import tasksReducer from "./reducers/tasksReducer";
import formStatusReducer from "./reducers/formStatusReducer";
import tabReducer from "./reducers/tabReducer";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    isFormOpen: formStatusReducer,
    activeTab: tabReducer,
    tasks: tasksReducer,
    formData: formReducer,
  },
});

export default store;
