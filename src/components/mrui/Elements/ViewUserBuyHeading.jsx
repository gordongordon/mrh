import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Relative, Absolute, Pre } from 'rebass';

const ViewUserBuyHeading = ({ location, building, recordNumber }) => (
    <Heading p={1} f='1rem' color="white" bg={["blue", "#F55869"]}>
            想買樓盤: {location} , {building}
            <Relative>
                <Absolute bottom right>
                    <Pre>編號:MOS-{recordNumber} </Pre>
                </Absolute>
            </Relative>
    </Heading>);

ViewUserBuyHeading.defaultProps = {
    location: "Missing",
    building: "Missing",
    recordNumber : 0
};

ViewUserBuyHeading.propTypes = {
    location: PropTypes.string.isRequired,
    building: PropTypes.string.isRequired,
    recordNumber: PropTypes.number.isRequired
};

export default ViewUserBuyHeading;


