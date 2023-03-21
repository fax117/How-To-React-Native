import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import axios from 'axios';
import SUStyles from '../styles/SUStyles';
import PastURLs from './PastURLs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import urlValidator from '../helpers/urlValidator';
import {ApiUrl} from '../types/types';

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
        const response = await axios.post(
          'https://url-shortener-server.onrender.com/api/alias',
          {
            url: {urlToShorten},
          },
        );

        /* The ._links.short is how we get the short URL
        in the response according to the API*/
        const res: ApiUrl = response.data._links;

        setShortUrl(res.short);
        setOldUrls(() => {
          return [{short: res.short, original: urlToShorten}, ...oldUrls];
        });
        setLoading(false);
      } catch (error) {
        Alert.alert('Error', error?.toString());
        console.log(error);
      }
    }
  };

  return (
    <View>
      {/* TODO: Clear input after correct response. */}
      <TextInput
        style={SUStyles.input}
        placeholder="Enter URL to shorten"
        value={urlToShorten}
        onChangeText={setUrl}
      />
      {loading ? (
        <ActivityIndicator style={SUStyles.loader} size="large" />
      ) : (
        <View>
          <Button title="Shorten URL" onPress={handleShortenUrl} />
          {shortUrl ? (
            <View style={SUStyles.resURLContainer}>
              <Text style={SUStyles.urlText}>{shortUrl}</Text>
              {/** If I have time, I'll implement the copy button*/}
              <TouchableOpacity>
                <Icon style={SUStyles.copyIcon} name="copy" size={24} />
              </TouchableOpacity>
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
