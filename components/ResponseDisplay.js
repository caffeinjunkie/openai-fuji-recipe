import React from 'react';

const ResponseDisplay = ({ data, error, loading, children }) => {
  const {
    title,
    description,
    exampleUse,
    optionalAdjustments,
    effectAndAesthetic,
    ...cameraSettings
  } = data.result;

  if (loading) {
    return <div>loading</div>
  } else if (error) {
    return <div>error</div>
  }

  return <div className="response-display">
    {children}
    <p className="description">{`"${description} ${exampleUse}"`}</p>
    <Grid data={cameraSettings} />
    <div className="additional-info">
      <div className="add-info-container">
        <h1 className="add-info-heading">Aesthetics</h1>
        <p className="add-info-text">{effectAndAesthetic}</p>
      </div>
      <div className="info-container">
        <h1 className="add-info-heading">Optional Adjustments</h1>
        <p className="add-info-text">{optionalAdjustments}</p>
      </div>
    </div>
  </div>;
};

const Grid = ({data}) => {
  const {
    whiteBalance,
    whiteBalanceShiftBlue = 0,
    whiteBalanceShiftRed = 0,
    whiteBalanceTemperature = 0,
    ...settings
  } = data;
  const entries = Object.entries(settings);
  const isLastItemFullSpan = entries.length % 2 === 0;

  //TODO: move to string utils
  const wbText = whiteBalanceTemperature !== 0 ? `${whiteBalanceTemperature}K` : whiteBalance.toString().toUpperCase();
  const wbShiftBlue = whiteBalanceShiftBlue > 0
    ? `, Blue +${whiteBalanceShiftBlue}` : `, Blue ${whiteBalanceShiftBlue}` < 0 ? whiteBalanceShiftBlue : '';
  const wbShiftRed = whiteBalanceShiftRed > 0
    ? `, Red +${whiteBalanceShiftRed}` : `, Red ${whiteBalanceShiftRed}` < 0 ? whiteBalanceShiftRed : '';
  const printValue = (key, value) => {
    if (key !== 'exposureCompensation') {
      return value.toString().toUpperCase();
    }
    return value.length > 1 ? `${value[0]} to ${value[value.length - 1]}` : value[0];
  }

  return (
    <div className="grid-container">
      {entries.map(([key, value], index) => (
        <div
          key={index}
          className={`
            grid-item 
            ${index === (entries.length - 1) && isLastItemFullSpan ? 'last-item' : ''} 
            ${index === 2 ? 'large-item' : ''}
            ${key === "grain" ? 'full-width' : ''}
            ${key === "exposureCompensation" ? 'full-width' : ''}
          `}
        >
          <p className="camera-settings-value">{printValue(key, value)}</p>
          <p className="camera-settings-name">{key}</p>
        </div>
      ))}
      <div className="grid-item full-width">
        <p className="camera-settings-value">{`${wbText}${wbShiftBlue}${wbShiftRed}`}</p>
        <p className="camera-settings-name">White Balance</p>
      </div>
    </div>
  );
};

export default ResponseDisplay;
