import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  ActivityIndicator,
  Alert,
} from 'react-native';

import SUStyles from '../styles/SUStyles';
import PastURLs from './PastURLs';
import urlValidator from '../helpers/urlValidator';
import {ApiUrl} from '../types/types';
import CopyButton from './CopyButton';
import postRequest from '../helpers/postRequest';

const ShortenURL = () => {
  const [urlToShorten, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [shortUrl, setShortUrl] = useState('');
  const [oldUrls, setOldUrls] = useState([]);

  const handleShortenUrl = async () => {
    if (!urlToShorten) {
      Alert.alert('Error', 'Please enter a URL');
    } else if (!urlValidator(urlToShorten)) {
      Alert.alert('Error', 'Please enter a valid URL');
    } else {
      try {
        setLoading(true);
        const postRest = await postRequest(urlToShorten);

        /* The ._links.short is how we get the short URL
        in the response according to the API*/
        const res: ApiUrl = postRest.data._links;

        setShortUrl(res.short);
        setOldUrls(() => {
          return [{short: res.short, original: urlToShorten}, ...oldUrls];
        });
        setLoading(false);

        // Clear InputText
        setUrl('');
      } catch (error) {
        Alert.alert('Error', error?.toString());
        console.log(error);
        setLoading(false);
      }
    }
  };

  return (
    <View>
      <TextInput
        style={SUStyles.input}
        placeholder="Enter URL to shorten"
        value={urlToShorten}
        onChangeText={setUrl}
        clearButtonMode="always"
        inputMode="url"
        testID="input"
      />
      {loading ? (
        <ActivityIndicator style={SUStyles.loader} size="large" />
      ) : (
        <View>
          <Button
            title="Shorten URL"
            onPress={handleShortenUrl}
            testID="shorten-btn"
          />
          {shortUrl ? (
            <View style={SUStyles.resURLContainer}>
              <Text style={SUStyles.urlText}>{shortUrl}</Text>
              <CopyButton stringToCopy={shortUrl} />
            </View>
          ) : (
            <Text style={SUStyles.urlText}>Your short URL goes here</Text>
          )}
        </View>
      )}

      <View style={SUStyles.separationLine} />
      <PastURLs urlsToDisplay={oldUrls} />
    </View>
  );
};

export default ShortenURL;
