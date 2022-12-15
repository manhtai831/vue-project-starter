import { reactive } from "vue";
import axios from "axios";
import ApiModel from "../../common/model/ApiModel";
import router from "../../router";

export const store = reactive({
  count: 20,
  id: "Any",
  todos: new ApiModel(),
  photos: new ApiModel(),
  onIncreament() {
    this.count++;
  },
  onDetailPressed(id) {
    console.log(id);
  },
  async getAllTodo() {
    await axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        this.todos = new ApiModel(
          response.data,
          response.status,
          response.headers
        );
      })
      .catch((error) => {
        this.todos = new ApiModel(
          error.response.data,
          error.response.status,
          error.response.headers
        );
      });
  },

  async getAllPhoto() {
    try{
      let response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos1"
    );
    return new ApiModel(response.data, response.status, response.headers);
    }catch(error){
      console.log(error)
    }
  },
});
