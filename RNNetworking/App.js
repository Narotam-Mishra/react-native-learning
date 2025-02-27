import { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';

const apiURL = `https://jsonplaceholder.typicode.com/posts`;

export default function App() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const fetchData = async (limit = 10) => {
    const response = await fetch(apiURL+`?_limit=${limit}`);
    const data = await response.json();
    setPostList(data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  if(isLoading){
    return(
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00ff" />
        <Text>Loading...</Text>
      </SafeAreaView>
    )
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData(20);
    setRefreshing(false);
  }

  const addPost = async () => {
    setIsPosting(true);
    const response = await fetch(apiURL, {
      method: 'post',
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
      })
    })

    const newPost = await response.json();
    setPostList([newPost, ...postList]);
    setPostTitle("");
    setPostBody("");
    setIsPosting(false);
  }

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder='Post title' 
          value={postTitle} 
          onChangeText={setPostTitle} 
        />
        <TextInput 
          style={styles.input} 
          placeholder='Post body' 
          value={postBody} 
          onChangeText={setPostBody} 
        />
        <Button 
          title={isPosting ? "Adding..." : "Add Post"} 
          onPress={addPost} 
          disabled={isPosting}
        />
      </View>
      <SafeAreaView style={styles.container}>
        <View style={styles.listContainer}>
          <FlatList
            data={postList}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.card}>
                  <Text>Index: {index}</Text>
                  <Text style={styles.titleText}>{item.title}</Text>
                  <Text style={styles.bodyText}>{item.body}</Text>
                </View>
              );
            }}
            ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
            ListEmptyComponent={<Text>No Posts Found</Text>}
            ListHeaderComponent={
              <Text style={styles.headerText}>Post List</Text>
            }
            ListFooterComponent={
              <Text style={styles.footerText}>End of list</Text>
            }
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  titleText: {
    fontSize: 30,
  },
  bodyText: {
    fontSize: 24,
    color: '#666666',
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "f5f5f5",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    backgroundColor: "#fff",
    padding:  16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    borderRadius: 8,
  }
});
