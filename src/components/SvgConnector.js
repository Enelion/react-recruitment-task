import React from 'react';
import PropTypes from 'prop-types';


class SvgConnector extends React.Component {
  static propTypes = {
    color: PropTypes.string,
    size: PropTypes.number,
  };

  static defaultProps = {
    color: '#ffffff',
    size: 20,
  };


  render() {
    const {color, size} = this.props;
    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width={`${size}px`}
        height={`${size}px`}
        viewBox="0 0 20 20"
        enableBackground="new 0 0 20 20"
        xmlSpace="preserve"
      >
        <g id="layer1">
          <g>
            <path
              fill={color}
              d="M12.411,7.159c-0.68,0-1.233-0.564-1.233-1.257s0.554-1.257,1.233-1.257c0.679,0,1.232,0.564,1.232,1.257
			S13.09,7.159,12.411,7.159z M12.411,5.557c-0.177,0-0.32,0.155-0.32,0.345c0,0.19,0.144,0.345,0.32,0.345
			c0.176,0,0.32-0.154,0.32-0.345C12.731,5.712,12.587,5.557,12.411,5.557z"
            />
            <path
              fill={color}
              d="M7.584,7.159c-0.68,0-1.232-0.564-1.232-1.257s0.553-1.257,1.232-1.257s1.233,0.564,1.233,1.257S8.264,7.159,7.584,7.159z
			 M7.584,5.557c-0.176,0-0.32,0.155-0.32,0.345c0,0.19,0.144,0.345,0.32,0.345c0.176,0,0.319-0.154,0.319-0.345
			C7.903,5.712,7.76,5.557,7.584,5.557z"
            />
          </g>
          <path
            fill={color}
            d="M9.997,20C4.485,20,0,15.516,0,10.002c0-2.95,1.295-5.736,3.553-7.641c0.101-0.085,0.465-0.362,0.931-0.362h11.038
		c0.466,0,0.835,0.291,0.905,0.349c2.269,1.907,3.567,4.696,3.567,7.654C19.994,15.516,15.51,20,9.997,20z M4.63,3.771
		c-1.818,1.567-2.858,3.832-2.858,6.231c0,4.537,3.689,8.226,8.225,8.226c4.537,0,8.226-3.688,8.226-8.226
		c0-2.4-1.041-4.664-2.857-6.231H4.63z"
          />
          <g>
            <g>
              <path
                fill={color}
                d="M5.139,11.753c-1.247,0-2.261-0.998-2.261-2.224c0-1.226,1.015-2.223,2.261-2.223S7.4,8.303,7.4,9.529
				C7.4,10.755,6.386,11.753,5.139,11.753z M5.139,8.545c-0.566,0-1.026,0.441-1.026,0.984c0,0.542,0.46,0.983,1.026,0.983
				c0.566,0,1.027-0.441,1.027-0.983C6.166,8.986,5.706,8.545,5.139,8.545z"
              />
            </g>
            <g>
              <path
                fill={color}
                d="M9.997,11.753c-1.247,0-2.261-0.998-2.261-2.224c0-1.226,1.014-2.223,2.261-2.223c1.247,0,2.261,0.997,2.261,2.223
				C12.258,10.755,11.244,11.753,9.997,11.753z M9.997,8.545c-0.565,0-1.026,0.441-1.026,0.984c0,0.542,0.461,0.983,1.026,0.983
				c0.567,0,1.027-0.441,1.027-0.983C11.024,8.986,10.564,8.545,9.997,8.545z"
              />
            </g>
            <g>
              <path
                fill={color}
                d="M14.855,11.753c-1.247,0-2.261-0.998-2.261-2.224c0-1.226,1.014-2.223,2.261-2.223c1.246,0,2.261,0.997,2.261,2.223
				C17.116,10.755,16.102,11.753,14.855,11.753z M14.855,8.545c-0.565,0-1.026,0.441-1.026,0.984c0,0.542,0.461,0.983,1.026,0.983
				c0.566,0,1.026-0.441,1.026-0.983C15.882,8.986,15.422,8.545,14.855,8.545z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                fill={color}
                d="M7.568,16.288c-1.246,0-2.26-0.998-2.26-2.224c0-1.227,1.014-2.225,2.26-2.225c1.248,0,2.262,0.998,2.262,2.225
				C9.83,15.29,8.815,16.288,7.568,16.288z M7.568,13.079c-0.565,0-1.026,0.442-1.026,0.985c0,0.542,0.46,0.983,1.026,0.983
				c0.566,0,1.027-0.441,1.027-0.983C8.595,13.521,8.134,13.079,7.568,13.079z"
              />
            </g>
            <g>
              <path
                fill={color}
                d="M12.426,16.288c-1.246,0-2.26-0.998-2.26-2.224c0-1.227,1.014-2.225,2.26-2.225c1.247,0,2.262,0.998,2.262,2.225
				C14.688,15.29,13.673,16.288,12.426,16.288z M12.426,13.079c-0.565,0-1.026,0.442-1.026,0.985c0,0.542,0.461,0.983,1.026,0.983
				c0.567,0,1.027-0.441,1.027-0.983C13.453,13.521,12.993,13.079,12.426,13.079z"
              />
            </g>
          </g>
        </g>
      </svg>
    );
  }
}

export default SvgConnector;