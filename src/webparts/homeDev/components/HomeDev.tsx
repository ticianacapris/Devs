import * as React from 'react';
import { App } from "./AppForm/App";
import { IHomeDevProps } from './IHomeDevProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class HomeDev extends React.Component<IHomeDevProps, {}> {
  public render(): React.ReactElement<IHomeDevProps> {
    return (
     <div>
       <App/>
     </div>
    );
  }
}
