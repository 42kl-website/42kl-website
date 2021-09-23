import * as React from "react";
import background from '../images/unanimated-transition.png';

// codes borrowed from:
// https://css-tricks.com/masking-vs-clipping-use/
// https://stackoverflow.com/questions/34064917/how-to-resize-svg-clip-path
const Meteor42 = ({ width }) => {
	return (
    <svg className="svg-defs" style={{ position: 'absolute' }} viewBox="0 0 1122 785" width={width}>
      <defs>
        <clipPath id="forty-two" width="1122" height="785">
          <path width="1122" height="785" id="Path 0" className="shp0" d="M205 203.66L0.5 407.31L0.5 578.5L412 579L412 785L618 785L618 412C301.02 412 208.79 411.66 208.54 411.25C208.28 410.84 239.44 379.68 277.79 342C316.13 304.33 409.15 211.98 484.5 136.77L621.5 0.05L409.5 0.01L205 203.66ZM705.75 101.25C705.88 156.94 705.99 203.29 706 204.25C706 205.25 706.75 206 707.75 206.01C708.73 206.01 723.89 191.51 742 173.25C759.88 155.23 782.26 132.27 791.75 122.24C801.24 112.21 809.56 104 810.25 104C810.94 104.01 818.81 96.69 827.75 87.75C836.68 78.81 843.99 71.05 843.99 70.5C844 69.95 858.97 54.54 877.27 36.25C895.57 17.96 910.87 3 911.27 3C911.67 3 912 48.11 912 103.25L912 203.5C803.5 312 772 343.95 772 344.5C772 345.05 757.15 360.35 739 378.5L706 411.5L706 618L1118 618C1118 458.35 1117.75 412 1117.43 412C1117.12 412 1074.04 455.01 1021.68 507.57C969.33 560.14 923.46 605.81 919.75 609.07L913 615L913 415C1033.46 293.71 1080.38 246.46 1094.97 231.75C1119.3 207.22 1121.4 204.84 1120.25 203C1119.27 201.43 1119 179.17 1119 100.5L1119 0L705.5 0L705.75 101.25Z" />
        </clipPath>
      </defs>
      <image href={background} width="1122" height="785" style={{ clipPath: 'url(#forty-two)' }}/>
    </svg>
	)
}

export default Meteor42
