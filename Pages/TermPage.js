import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";

const TermPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Terms & Conditions</Text>
      <Text style={styles.subtitle}>1. GENERAL INFORMATION</Text>
      <View>
        <Text style={styles.secHeading}>1.1 HEADSPACE PRODUCTS</Text>
        <Text style={styles.secGeneral}>
          Welcome to our mobile application ("App"). These terms and conditions
          ("Terms") govern your use of the App. By downloading, installing, or
          accessing the App, you agree to be bound by these Terms. If you do not
          agree with any part of these Terms, please refrain from using the App.
          The App is provided for informational purposes and personal use only.
          You may not use the App for any illegal or unauthorized purpose. You
          agree to comply with all applicable laws and regulations while using
          the App. All intellectual property rights, including but not limited
          to copyrights, trademarks, and patents, in the App and its content
          belong to the App owner or its licensors. You may not reproduce,
          modify, distribute, or exploit any part of the App without obtaining
          prior written permission. The App may allow you to submit or post
          content, including text, images, or other materials ("User Content").
          By submitting User Content, you grant the App owner a non-exclusive,
          royalty-free, worldwide license to use, reproduce, modify, adapt,
          publish, and distribute the User Content. You are solely responsible
          for the accuracy, legality, and appropriateness of the User Content
          you submit. The App collects and processes personal data in accordance
          with its Privacy Policy, which is incorporated by reference into these
          Terms. By using the App, you consent to the collection, storage, and
          processing of your personal data as outlined in the Privacy Policy.
          The App may contain links to third-party websites or services that are
          not owned or controlled by the App owner. The App owner has no control
          over, and assumes no responsibility for, the content, privacy
          policies, or practices of any third-party websites or services. You
          acknowledge and agree that the App owner shall not be liable, directly
          or indirectly, for any damage or loss caused or alleged to be caused
          by or in connection with the use of or reliance on any such content,
          goods, or services available on or through any such websites or
          services. The App is provided on an "as is" and "as available" basis,
          without warranties of any kind, either express or implied. The App
          owner does not warrant that the App will be uninterrupted, error-free,
          or free from viruses or other harmful components. To the maximum
          extent permitted by law, the App owner shall not be liable for any
          direct, indirect, incidental, consequential, or special damages
          arising out of or in connection with the use or inability to use the
          App. The App owner reserves the right to modify or amend these Terms
          at any time. Updated Terms will be posted within the App. Your
          continued use of the App after any modifications indicate your
          acceptance of the modified Terms. These Terms shall be governed by and
          construed in accordance with the laws of [Insert Jurisdiction]. Any
          disputes arising out of or in connection with these Terms shall be
          subject to the exclusive jurisdiction of the courts of [Insert
          Jurisdiction]. Please read these Terms carefully before using the App.
          If you have any questions or concerns about these Terms, please
          contact us at [Insert Contact Information]. By using the App, you
          signify your agreement to these Terms.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    color: "rgba(0,0,0,0.5)",
    fontWeight: 600,
    paddingVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    color: "rgba(0,0,0,0.5)",
    fontWeight: 600,
    marginVertical: 5,
  },
  secHeading: {
    fontSize: 15,
    textAlign: "left",
    color: "rgba(0,0,0,0.6)",
    marginVertical: 3,
    fontWeight: 500,
  },
  secGeneral: {
    marginVertical: 0,
    textAlign: "left",
    color: "rgba(0,0,0,0.5)",
  },
});

export default TermPage;
