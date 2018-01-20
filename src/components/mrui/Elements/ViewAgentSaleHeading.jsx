import React from 'react';
import PropTypes from 'prop-types';
import TextHeader from './TextHeader';
import { Heading, Absolute, Pre, Relative } from 'rebass';

const ViewAgentSaleHeading = ({ location, building, recordNumber }) => (
    <Heading>
        <TextHeader p={1} color="white" bg={["blue", "#F55869"]}>
        出售樓盤: {location} , {building}
            <Relative>
                <Absolute bottom right>
                    <Pre>編號:MOS-{recordNumber} </Pre>
                </Absolute>
            </Relative>
        </TextHeader>
    </Heading>
);

ViewAgentSaleHeading.defaultProps = {
    location: "Missing",
    building: "Missing",
    recordNumber : 0
};

ViewAgentSaleHeading.propTypes = {
    location: PropTypes.string.isRequired,
    building: PropTypes.string.isRequired,
    recordNumber: PropTypes.number.isRequired
};

export default ViewAgentSaleHeading;


