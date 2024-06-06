import React, {useEffect, useState, useRef} from 'react';
import {View, StyleSheet, Platform, Text} from 'react-native';

import {COLOR, FONTS, SIZES} from 'src/theme';
import {METHOD} from 'src/utils';

interface IReadMore {
  descInfo: any;
  maxLine: number;
  percent?: any;
  textStyle?: any;
  onPress?: () => (arg1: any, arg2: any) => void;
}
const ReadMore = ({
  descInfo,
  maxLine,
  percent,
  textStyle,
  onPress,
}: IReadMore) => {
  console.log('descInfodescInfo', descInfo);

  const [description, setDescription] = useState<any>(descInfo);
  const [lines, setLines] = useState<any>([]);
  const [showMore, setShowMore] = useState<boolean>(true);
  const [isLongDesc, setLongDesc] = useState<boolean>(false);

  useEffect(() => {
    if (lines) {
      let isLongDescription = lines.length > maxLine;
      if (isLongDescription) {
        updateDescription();
        setLongDesc(isLongDescription);
      }
    }
  }, [lines.length]);

  useEffect(() => {
    if (isLongDesc) {
      updateDescription();
    }
  }, [showMore]);

  const updateDescription = () => {
    let sizeOfLastLine: any = lines[maxLine - 1].text.length;

    let percentCharacter: any = parseInt(
      percent ? percent : 0.75 * sizeOfLastLine,
    );

    let lastLine: any = '';

    let desc: any = '';

    if (showMore) {
      lastLine = METHOD.getSubStr(lines[maxLine - 1]?.text, percentCharacter);
      lines.map((item: any, index: number) => {
        if (index < maxLine - 1) {
          desc = desc + item.text;
        }
      });
      desc = desc + lastLine;
    } else {
      desc = descInfo;
    }

    setDescription(desc);

    /* console.log(
      'onTextLayout isLongDesc ===> ',
      isLongDesc,
      ', ',
      sizeOfFirstLine,
      ', ',
      sizeOfLastLine,
      ', ',
      percentCharacter,
      ' , ',
      desc,
    ); */
  };
  const onTextLayout = (e: any) => {
    let lines = e.nativeEvent.lines;
    setLines(lines);
  };

  return (
    <View style={styles.vParent}>
      <Text style={textStyle} onTextLayout={onTextLayout}>
        {description + ' '}
        {isLongDesc && (
          <Text
            style={styles.seeMoreText}
            onPress={() => {
              if (onPress) {
                onPress();
              } else {
                setShowMore(!showMore);
              }
            }}>
            {showMore ? 'Read more' : 'Read less'}
          </Text>
        )}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  vParent: {
    flex: 1,
  },
  seeMoreText: {
    color: COLOR.theme,
    fontSize: SIZES.countPixelRatio(16),
    lineHeight: SIZES.countPixelRatio(24),
    fontFamily: FONTS.SEMI_BOLD,
  },
  seeLessText: {
    color: COLOR.theme,
    fontSize: SIZES.countPixelRatio(16),
    lineHeight: SIZES.countPixelRatio(24),
    fontFamily: FONTS.SEMI_BOLD,
  },
});

export default ReadMore;
