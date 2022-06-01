import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  headerContainer: {
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
  formContainer: {
    marginVertical: 30,
  },
  formItem: {
    marginBottom: 20,
  },
  formLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  formField: {
    fontSize: 16,
    backgroundColor: '#ccc',
    padding: 12,
    borderRadius: 6,
  },
  formButtonContainer: {
    marginTop: 20,
  },
  button: {
    borderRadius: 6,
    padding: 14,
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#fc037b',
  },
  loginButtonDisabled: {
    backgroundColor: '#f2c9e6',
  },
  loginButtonText: {
    textTransform: 'uppercase',
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
});

export default styles;
