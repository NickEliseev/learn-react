import { Box, Input } from "@chakra-ui/react";
import { TodoListItem, TodoListItemDefinition } from "./TodoListItem";
import { useState } from "react";

export const TodoList = () => {
  const initialItems: Array<TodoListItemDefinition> = [
    {
      text: "Die hard, motherf*cker!",
      status: "new",
      id: Date.now().toString(),
    },
  ];


  const [todoListItemsDefinitions, setItems] = useState(initialItems);


  const [value, setValue] = useState("");


  const onListItemClick = (id: string) => {
    const newItems = todoListItemsDefinitions.map((item) => {
      if (item.id === id) {
        if (item.status === "new") {
          item.status = "done";
        } else if (item.status === "done") {
          item.status = "undone";
        } else if (item.status === "undone") {
          item.status = "new";
        }
      }
      return item;
    });
    setItems(newItems);
  };
  return (
    <Box>
      <Input
        onChange={(e) => {
          console.log(e.currentTarget.value);
          setValue(e.currentTarget.value);
        }}
        value={value}
        onKeyPress={(e) => {
          if (e.code !== "Enter") return;
          setItems([
            { text: value, status: "new", id: Date.now().toString() },
            ...todoListItemsDefinitions,
          ]);
          setValue("");
        }}
        variant="filled"
        placeholder="Filled"
      />
      <Box marginTop="20px">
        {todoListItemsDefinitions
          .sort((a, b) => {
            if (a.status === "undone") return -1;
            if (b.status === "undone") return 1;
            if (a.status === "done") return 1;
            if (b.status === "done") return -1;
            return 0;
          })
          .map(({ text, status, id }) => (
            <TodoListItem
              text={text}
              onClick={onListItemClick}
              status={status}
              id={id}
            />
          ))}
      </Box>
    </Box>
  );
};
