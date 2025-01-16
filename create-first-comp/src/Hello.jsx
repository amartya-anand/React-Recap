function Hello() {
  let number = 501;
  let fullName = () => {
    return "Amartya Anand";
  };
  return (
    <p>
      MessageNo: {number},I am your master speaking {fullName()}
    </p>
  );
}
export default Hello;
