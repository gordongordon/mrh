import React from 'react';
import defaultTheme from '../theme';
import PropTypes from 'prop-types';
//import Carousel from '../Carousel/index';

import {
  BackgroundImage,
  Flex,
  Text
} from "rebass";

  import MrCard from '../MrCard';

  export const AgentLeaseProperty = ( { onWhatsapp, onCall, onTriggetNext, p,isBackgroundImage  } ) => (

      <MrCard w={19 / 20}>
      <MrCard.AgentLeaseHeading location={p.addressLocationLabel} building={p.nameOfBuildingLabel} recordNumber={1} />

        {isBackgroundImage && <BackgroundImage ratio={2 / 5} src="http://www.kowsinn.com/dc02.jpg" />}
        <Flex wrap mx={1} my={1}>
          <MrCard.LineText>
            <Text f={3}>重點</Text>
          </MrCard.LineText>
          <MrCard.LeasePrice value={p.leasePrice} />
          <MrCard.NetSize value={p.netSize} />
          <MrCard.NetSquareLeasePrice value={23} />
          <MrCard.Partition room={1} livingroom={1} bathroom={1} />
          
          <MrCard.LineText>
            <Text f={3}>特徵</Text>
          </MrCard.LineText>

          <MrCard.HasHomeHardware value={p.hasHomeHardware} />
          <MrCard.IsPetAllowed value={p.isPetAllowed} />
          <MrCard.LeaseDeposit value={p.leaseDepositPerMonth} />
          <MrCard.LeaseTaxInclusive value={true} />
          <MrCard.LineText>
            <Text f={3}>其他</Text>
          </MrCard.LineText>
          <MrCard.LeasingPeriod value={p.leasingPeriod} />
          <MrCard.DueDay value={p.dueDayLabel} />
          <MrCard.EarlyTimeToView value={p.earlyTimeToViewLabel}  />
          <MrCard.DayListed value={p.dayListed} />

          
          <MrCard.LineText>
            <Text f={3}>聯絡方式</Text>
          </MrCard.LineText>
          <MrCard.AgentID value="E-3348778" />
          <MrCard.Avatar src="http://www.kowsinn.com/dc03.jpeg" />
          <MrCard.ContactName value={p.contactName}/>
          <MrCard.AgentStar value={3} />
          <MrCard.LineText>
            <Text f={3}>下一步行動</Text>
          </MrCard.LineText>
          <MrCard.Cell px={2} py={1} width={1} align="center">
            {onCall &&
              <MrCard.ButtonOutline
                onClick={() => onCall(p.contactPhone)}
                width={7 / 22}
                children={p.contactPhone}
                f={5}
                color="#F55869"
              />
            }
            {onWhatsapp &&
              <MrCard.ButtonOutline

                onClick={() => onWhatsapp(p.contactPhone)}
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


AgentLeaseProperty.propTypes = {
  onWhatsapp : PropTypes.func,
  onCall : PropTypes.func,
   onTriggetNext : PropTypes.func,
    p : PropTypes.object, 
};

AgentLeaseProperty.defaultProps = {
  onWhatsapp :  undefined,
  onCall :  undefined,
   onTriggetNext :  undefined,
    p :  undefined,
};
