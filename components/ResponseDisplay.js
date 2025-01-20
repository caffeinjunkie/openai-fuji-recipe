const ResponseDisplay = ({ data, error, loading }) => {
  const {
    description,
    exampleUse,
    optionalAdjustment,
    effectAndAesthetic,
    ...cameraSettings
  } = data.result;

  if (loading) {
    return <div>loading</div>
  } else if (error) {
    return <div>error</div>
  }

  return <div className="response-display">{Object.entries(cameraSettings).map((value) => <div>{value}</div>)}</div>;
};

export default ResponseDisplay;
