const Message = () => {
  let count = 0; //when we take initialization into then it will not re rendering
  count++; // that will make the function to be re-rendered every time and impure
  return <div>Message {count}</div>;
};

export default Message;
