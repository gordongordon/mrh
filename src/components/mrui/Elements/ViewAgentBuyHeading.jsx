import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Absolute, Pre, Relative } from 'rebass';

const ViewAgentBuyHeading = ({ location, building, recordNumber }) => (
    <Heading p={1} f='1rem' color="white" bg={["blue", "#F55869"]}>
    有客約睇樓: {location} , {building}
            <Relative>
                <Absolute bottom right>
                    <Pre>編號:MOS-{recordNumber} </Pre>
                </Absolute>
            </Relative>
    </Heading>
);

ViewAgentBuyHeading.defaultProps = {
    location: "Missing",
    building: "Missing",
    recordNumber : 0
};

ViewAgentBuyHeading.propTypes = {
    location: PropTypes.string.isRequired,
    building: PropTypes.string.isRequired,
    recordNumber: PropTypes.number.isRequired
};

export default ViewAgentBuyHeading;


