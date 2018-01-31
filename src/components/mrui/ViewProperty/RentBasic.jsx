import React from 'react';
//import defaultTheme from '../theme';
import PropTypes from 'prop-types';
// import Carousel from '../Carousel/index';

import {
  BackgroundImage,
  Flex,
  Text
} from "rebass";

import MrCard from '../MrCard';

export const RentBasic = ( { onWhatsapp, onCall, onTriggetNext, p ,isBackgroundImage, onResponse, index  } ) => (
      <MrCard m={3} w={18 / 20} onClick={() => onResponse && onResponse(p)}>


        {isBackgroundImage && <BackgroundImage ratio={2 / 5} src="http://www.kowsinn.com/dc02.jpg" />}

        <Flex wrap mx={1} my={1}>
        <MrCard.LineText>
            <Text f={4}>{p.contactName}</Text>
          </MrCard.LineText>

          <MrCard.Income value={p.income} />
          <MrCard.JobNature value={p.jobNatureLabel} />

          <MrCard.NumOfPeopleLiving value={p.numOfPeopleLiving} />
          <MrCard.IsPetAllowed value={p.isPetAllowed} />
          <MrCard.LeasingPeriod value={p.leasingPeriod} />

          <MrCard.EarlyTimeToView value={p.earlyTimeToViewLabel} />
          <MrCard.DueDay value={p.dueDayLabel} />
          <MrCard.DayListed value={p.dayListed} />

          <MrCard.Cell px={2} py={1} width={1} align="center">       
            {onCall &&
              <MrCard.ButtonOutline
                onClick={() => onCall(property.contactPhone)}
                width={7 / 22}
                children={p.contactPhone}
                f={5}
                color="#F55869"
              />
            }
            {onWhatsapp &&
              <MrCard.ButtonOutline

                onClick={() => onWhatsapp(property.contactPhone)}
                mx={1}
                width={7 / 22}
                children="Whatsapp"
                f={5}
                color="#F55869"
              />
            }
            {onTriggetNext && <MrCard.ButtonOutline
              onClick={() => onTriggetNext()}
              width={7 / 22}
              children="Home"
              f={5}
              color="#F55869"
            />
            }
          </MrCard.Cell>
        </Flex>
      </MrCard>
    );


    RentBasic.propTypes = {
      onWhatsapp : PropTypes.func,
      onCall : PropTypes.func,
       onTriggetNext : PropTypes.func,
        p : PropTypes.object, 
    };
    
    RentBasic.defaultProps = {
      onWhatsapp :  undefined,
      onCall :  undefined,
       onTriggetNext :  undefined,
        p :  undefined,
    };