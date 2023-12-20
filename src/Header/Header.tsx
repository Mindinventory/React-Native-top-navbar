import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  type ViewStyle,
  type StatusBarStyle,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

var updatedChildren: Array<JSX.Element> | JSX.Element | undefined;

interface headerProps {
  style: object;
  statusBarBackground: string;
  children: Array<JSX.Element> | JSX.Element | undefined;
  barStyle: null | StatusBarStyle | undefined;
}

export type leftProps = {
  style: object;
  children: JSX.Element;
};

export type bodyProps = {
  style: object;
  children: JSX.Element;
};

export type rightProps = {
  style: object;
  children: JSX.Element;
};

const Left: React.FC<leftProps> = (props) => {
  const { children, style } = props;
  let leftStyle = [styles.sideBar, style];
  return <View style={leftStyle}>{children}</View>;
};

const Right: React.FC<rightProps> = (props) => {
  const { children, style } = props;
  let rightStyle = [styles.sideBar, style];
  return <View style={rightStyle}>{children}</View>;
};

const Body: React.FC<bodyProps> = (props) => {
  const { children, style } = props;
  let bodyStyle = [styles.body, style];
  return <View style={bodyStyle}>{children}</View>;
};

export class Header extends Component<headerProps> {
  static Left = Left;
  static Right = Right;
  static Body = Body;

  spaceManager = (spaceData: Array<JSX.Element>) => {
    let tempArr: Array<JSX.Element> = [];
    spaceData.filter((item) => {
      const { props, type } = item;
      if (type.name === 'Right' || type.name === 'Left') {
        if (props.style && props.style.width) {
          tempArr = [...tempArr, item];
        }
      }
    });
    if (tempArr.length > 1) {
      const maxPeak = tempArr.reduce((p, c) =>
        p.props.style.width > c.props.style.width ? p : c
      );

      let converInNumber = maxPeak.props.style.width.substring(
        0,
        maxPeak.props.style.width.length - 1
      );

      let maxSize = Number(converInNumber);
      let multiplySize = Number(maxSize) * 2;
      let availableSpace = 100 - multiplySize;

      spaceData.map((val) => {
        const { type } = val;
        if (type.name === 'Right' || type.name === 'Left') {
          val.props.style.width =
            maxSize <= 15
              ? '15%'
              : maxSize <= 20
              ? maxSize.toString().concat('%')
              : '20%';
        } else {
          val.props.style.width =
            maxSize <= 15
              ? '70%'
              : maxSize <= 20
              ? availableSpace.toString().concat('%')
              : '60%';
        }
        updatedChildren = spaceData;
      });
    } else {
      updatedChildren = spaceData;
    }
    // updatedChildren = spaceData
  };

  headerManager = (children: Array<JSX.Element> | JSX.Element | undefined) => {
    let newArr: Array<string> = [];

    if (children !== undefined && Array.isArray(children)) {
      children.map((val) => {
        newArr.push(val.type.name);
      });
      if (newArr.includes('Body') && newArr.includes('Right')) {
        styles.mainContainer = {
          ...styles.mainContainer,
          justifyContent: 'flex-end',
        };
        updatedChildren = children;
      } else if (newArr.includes('Left') && newArr.includes('Right')) {
        styles.mainContainer = {
          ...styles.mainContainer,
          justifyContent: 'space-between',
        };
        updatedChildren = children;
      } else if (newArr.includes('Left') && newArr.includes('Body')) {
        styles.mainContainer = {
          ...styles.mainContainer,
          justifyContent: 'flex-start',
        };
        updatedChildren = children;
      }
      this.spaceManager(children);
    } else {
      if (children !== undefined && children.type.name === 'Body') {
        styles.mainContainer = {
          ...styles.mainContainer,
          justifyContent: 'center',
        };
        styles.body = { ...styles.body };
        updatedChildren = children;
      } else if (children !== undefined && children.type.name === 'Right') {
        styles.mainContainer = {
          ...styles.mainContainer,
          justifyContent: 'flex-end',
        };
        updatedChildren = children;
      } else if (children !== undefined && children.type.name === 'Left') {
        styles.mainContainer = {
          ...styles.mainContainer,
          justifyContent: 'flex-start',
        };
        updatedChildren = children;
      } else {
        styles.mainContainer = {
          ...styles.mainContainer,
          justifyContent: 'center',
        };
        updatedChildren = children;
      }
    }
  };

  render() {
    const { children, style, statusBarBackground } = this.props;
    this.headerManager(children);
    let headerStyle = [styles.mainContainer, style];
    return (
      <>
        <View
          style={[styles.statusBar, { backgroundColor: statusBarBackground }]}
        >
          <StatusBar
            translucent
            backgroundColor={statusBarBackground}
            {...this.props}
          />
        </View>
        <View {...this.props} style={headerStyle}>
          {updatedChildren}
        </View>
      </>
    );
  }
}

type Style = {
  mainContainer: ViewStyle;
  statusBar: ViewStyle;
  sideBar: ViewStyle;
  body: ViewStyle;
};

const styles = StyleSheet.create<Style>({
  mainContainer: {
    height: Platform.OS === 'ios' ? 44 : 48,
    backgroundColor: '#009999',
    alignItems: 'center',
    flexDirection: 'row',
  },
  statusBar: {
    height: getStatusBarHeight(),
  },
  sideBar: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: 5,
  },

  body: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    alignSelf: 'center',
  },
});
