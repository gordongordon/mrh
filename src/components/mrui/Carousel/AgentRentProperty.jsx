import React from 'react';
import defaultTheme from '../theme';
import PropTypes from 'prop-types';
// import Carousel from '../Carousel/index';

import {
  BackgroundImage,
  Flex,
  Text
} from "rebass";

import MrCard from '../MrCard';

export const AgentRentProperty = ( { onWhatsapp, onCall, onTriggetNext, p  } ) => (
      <MrCard w={19 / 20}>
        <MrCard.AgentRentHeading location={p.addressLocationLabel} building={p.nameOfBuildingLabel} recordNumber={1} />

        {BackgroundImage && <BackgroundImage ratio={2 / 5} src="http://www.kowsinn.com/dc02.jpg" />}

        <Flex wrap mx={1} my={1}>
          <MrCard.LineText>
            <Text f={3}>租客資料</Text>
          </MrCard.LineText>

          <MrCard.Income value={p.income} />
          <MrCard.JobNature value={p.jobNatureLabel} />

          <MrCard.LineText>
            <Text f={3}>要求</Text>
          </MrCard.LineText>
          <MrCard.NumOfPeopleLiving value={p.numOfPeopleLiving} />
          <MrCard.IsPetAllowed value={p.isPetAllowed} />
          <MrCard.LeasingPeriod value={p.leasingPeriod} />

          <MrCard.LineText>
            <Text f={3}>時間</Text>
          </MrCard.LineText>

          <MrCard.EarlyTimeToView value={p.earlyTimeToViewLabel} />
          <MrCard.DueDay value={p.dueDayLabel} />
          <MrCard.DayListed value={p.dayListed} />

          <MrCard.LineText>
            <Text f={3}>聯絡方式</Text>
          </MrCard.LineText>

          <MrCard.AgentID value="E-3348778" />
          <MrCard.Avatar src="http://www.kowsinn.com/dc03.jpeg" />
          <MrCard.ContactName value={p.contactName} />
          <MrCard.AgentStar value={3} />

          <MrCard.LineText>
            <Text f={3}>下一步行動</Text>
          </MrCard.LineText>

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


    AgentRentProperty.propTypes = {
      onWhatsapp : PropTypes.func,
      onCall : PropTypes.func,
       onTriggetNext : PropTypes.func,
        p : PropTypes.object, 
    };
    
    AgentRentProperty.defaultProps = {
      onWhatsapp :  undefined,
      onCall :  undefined,
       onTriggetNext :  undefined,
        p :  undefined,
    };