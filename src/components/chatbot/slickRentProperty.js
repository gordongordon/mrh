import React from 'react';
import { Modal, Toast , Carousel, WhiteSpace, WingBlank, Button } from 'antd-mobile';
//import { Generic } from 'react-simple-chatbot';
import PropTypes from 'prop-types';
import {propertys} from 'userModelView';
import {ListOfMatchOldSalePropertys} from '../listOfMatch/listOfMatchOldSalePropertys';
import { SingleSaleUserMatchViewWrapper } from "../singlePropertyView/singleSaleUserMatchView";
import {observer } from "mobx-react";
//import {AgentBuyProperty as ItemView } from "react-simple-chatbot";
//import {AgentBuyProperty as ItemView } from "../mrui/AgentBuyProperty/AgentBuyProperty";
//import AgentBuyProperty from "../mrui/AgentBuyProperty/AgentBuyProperty";

import { UserRentProperty as ItemView } from "../mrui/Carousel/UserRentProperty";
//const ItemView = AgentBuyProperty;
const prompt = Modal.prompt;

@observer
export default class SlickRentProperty extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      data: ['', '', ''],
      initialHeight: 450,
        value: null,
      trigger: false
    };
    this.display = this.display.bind(this);
  }


  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }


  display( propertys ) {
    const list = propertys;
    

    // Catched empty list, don't do anything!
    if (list.size === 0) {
      return <div>Waiting for respond ... </div>;
    }

    //const timeEnter = this.props.timeEnter;
    // Try to show most uptoday item only
    var element = [];

    var count = 0;
    list.forEach((property, keyID) => {
      property.setTimeStamp();


      if ( count == 0 ) {
      element.push(
        <ItemView key={keyID}
          p={property}
          isFirst={true}
          isLast={false}
          index={count}
          isBackgroundImage={false}
        />
      );      
    } else 
    {
  
      element.push(
        <ItemView key={keyID}
          p={property}
          isFirst={false}
          isLast={false}
          index={count}
          isBackgroundImage={false}
          
        />
      );      

    }
    count++;
    });

  return (element);
  };

  render() {
    const keyID = this.props.keyID;  

    /**
     * make sure either matchProperty or responsedPropertys
     * in this case, we are matching agents reponsed property. 
     */
    const localpropertys = this.props.propertys;
    
    return (
        <Carousel
          className="my-carousel"
          autoplay={true}
          dots={false}
          selectedIndex={0}
          swipeSpeed={3}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
        {this.display(localpropertys)}
      </Carousel>

     );
  }
}

SlickRentProperty.propTypes = {
   //steps: PropTypes.object,
  //triggerNextStep: PropTypes.func,
};

SlickRentProperty.defaultProps = {
  //steps: undefined,
  //triggerNextStep: undefined,
};