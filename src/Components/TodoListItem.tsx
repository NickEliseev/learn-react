import { Box } from "@chakra-ui/react";

export type TodoListItemProps = {
  onClick: (key: string) => void;
} & TodoListItemDefinition;

export type TodoListItemDefinition = {
  text: string;
  status?: "new" | "done" | "undone";
  id: string;
}
const todoListItemStyles = {
  new: {},
  done: { textDecoration: "line-through" },
  undone: { fontWeight: "bold" },
};

export const TodoListItem = (props: TodoListItemProps) => {
  const {
    text,
    status = "new",
    onClick,
    id,
  } = props;


  const styles = todoListItemStyles[status];


  return (
    <Box {...styles} onClick={() => onClick(id)}>
      {text}
    </Box>
  );
};
