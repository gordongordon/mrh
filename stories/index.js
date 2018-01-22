import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import Button from './Button';
import Welcome from './Welcome';
import LineText from '../src/components/mrui/Elements/LineText';
import ViewAgentStar from  '../src/components/mrui/Elements/ViewAgentStar';

storiesOf('ViewAgentStar', module)
  .add('to Storybook', () => (
    <ViewAgentStar value={3} />
  ));


storiesOf('LineText', module)
  .add('to Storybook', () => (
    <LineText> Hello </LineText>
  ));

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));
