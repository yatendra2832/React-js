let count = 0;

const Message = () => {
  console.log("Message Called ", count);
  count++;
  return <div>Message {count}</div>;
};
// in strict mode our components will render twice that is the reason why we are seeing the count is to message 2 in the screen as in the production mode it will render only once as we will not using the restrict mode
export default Message;
