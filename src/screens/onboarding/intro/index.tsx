import React, {useRef, useState} from 'react';
import {
  Animated,
  Image,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import SafeAreaView from 'react-native-safe-area-view';
import {APP_IMAGES} from 'src/assets/images';
import {CONSTANT, METHOD, STRING} from 'src/utils';
import {SIZES} from 'src/theme';
import {replace} from 'src/navigation/RootNavigation';
import {Routes} from 'src/navigation/route';

export default ({route}: any): JSX.Element => {
  const scrollViewRef = useRef(null);
  const [sliderPage, setSliderPage] = useState({currentPage: 0});
  const {currentPage: pageIndex} = sliderPage;

  const scrollTo = (isForward: any) => {
    if (scrollViewRef.current !== null) {
      scrollViewRef.current.scrollTo({
        x: SIZES.WIDTH * (isForward ? pageIndex + 1 : pageIndex - 1),
        animated: true,
      });
    }
  };
  const onScrollPage = (event: any) => {
    const {currentPage} = sliderPage;
    const {x} = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.round(x / SIZES.WIDTH);
    if (indexOfNextScreen !== currentPage) {
      setSliderPage({
        ...sliderPage,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const onSkipPress = () => {
    METHOD.savePref(CONSTANT.PREF_INTRO, true);
    replace(Routes.Welcome);
  };

  const renderImageContainer = () => {
    return (
      <Animated.ScrollView
        ref={scrollViewRef}
        style={{flex: 1}}
        horizontal={true}
        scrollEventThrottle={10}
        pagingEnabled={true}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onScroll={event => {
          onScrollPage(event);
        }}>
        <Animated.View style={{height: SIZES.HEIGHT, width: SIZES.WIDTH}}>
          <Text style={styles.tSkip} onPress={onSkipPress}>
            {STRING.intro.skip}
          </Text>
          <ImageBackground
            source={APP_IMAGES.ic_intro1}
            style={[styles.imageStyle]}
            imageStyle={styles.imageStyle}>
            <View style={styles.vTitle}>
              <Text style={styles.tTitle}>{STRING.intro.intro_title_1}</Text>
            </View>
          </ImageBackground>
        </Animated.View>
        <Animated.View style={{height: SIZES.HEIGHT, width: SIZES.WIDTH}}>
          <Text style={styles.tSkip} onPress={onSkipPress}>
            {STRING.intro.skip}
          </Text>
          <ImageBackground
            source={APP_IMAGES.ic_intro2}
            style={[styles.imageStyle]}
            imageStyle={styles.imageStyle}>
            <View style={styles.vTitle}>
              <Text style={styles.tTitle}>{STRING.intro.intro_title_2}</Text>
            </View>
          </ImageBackground>
        </Animated.View>
      </Animated.ScrollView>
    );
  };
  const renderBottomButtonContainer = () => {
    return (
      <View style={styles.vBottomRowContainer}>
        <View style={styles.vDot}>
          <View style={styles.vDotInner}>
            {Array.from(Array(2).keys()).map((key, index) => (
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  pageIndex === index ? styles.activeDots : styles.inActiveDots,
                ]}
                key={index}
                onPress={() => {
                  if (pageIndex < 2) {
                    scrollTo(true);
                  } else {
                    METHOD.savePref(CONSTANT.PREF_INTRO, true);
                    replace(Routes.Welcome);
                  }
                }}
              />
            ))}
          </View>
        </View>
        <TouchableOpacity
          style={styles.toNext}
          onPress={() => {
            if (pageIndex == 0) {
              scrollTo(true);
            } else {
              METHOD.savePref(CONSTANT.PREF_INTRO, true);
              replace(Routes.Welcome);
            }
          }}
          activeOpacity={0.8}>
          <Image source={APP_IMAGES.ic_next_arrow} style={styles.iNext} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={styles.SaContainer}
      forceInset={{top: 'always', bottom: 'never'}}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent
      />
      <View style={styles.vContainer}>
        {renderImageContainer()}
        {renderBottomButtonContainer()}
      </View>
    </SafeAreaView>
  );
};
