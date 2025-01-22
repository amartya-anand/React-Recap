let CurrentTime = () => {
  let time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();
  return (
    <p className="lead">
      The current time and date is:{time}-{date}
    </p>
  );
};

export default CurrentTime;
