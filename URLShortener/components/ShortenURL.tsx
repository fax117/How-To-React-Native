import React, {useState} from 'react';
import {View, TextInput, Button, Text, ActivityIndicator} from 'react-native';
import axios from 'axios';
import SUStyles from '../styles/SUStyles';
import PastURLs from './PastURLs';

const ShortenURL = () => {
  const [urlToShorten, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [shortUrl, setShortUrl] = useState('');

  const handleShortenUrl = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        'https://url-shortener-server.onrender.com/api/alias',
        {
          url: {urlToShorten},
        },
      );
      console.log(response.data._links.short);
      /* The ._links.short is how we get the short URL
      in the response according to the API*/
      setShortUrl(response.data._links.short);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <TextInput
        style={SUStyles.input}
        placeholder="Enter URL to shorten"
        value={urlToShorten}
        onChangeText={setUrl}
      />
      <Button title="Shorten URL" onPress={handleShortenUrl} />
      {loading ? (
        <ActivityIndicator style={SUStyles.loader} size="large" />
      ) : (
        <Text style={SUStyles.urlText}>
          {shortUrl ? shortUrl : 'Your Shorten URL goes here <3'}
        </Text>
      )}

      <PastURLs />
    </View>
  );
};

export default ShortenURL;
