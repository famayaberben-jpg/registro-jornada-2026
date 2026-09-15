import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

export const Card = ({ children, style }) => (
  <View style={[styles.card, style]}>{children}</View>
);

export const StatCard = ({ label, value, unit, style }) => (
  <View style={[styles.statCard, style]}>
    <Text style={styles.statLabel}>{label}</Text>
    <View style={styles.statValueContainer}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statUnit}>{unit}</Text>
    </View>
  </View>
);

export const JornadaItem = ({
  fecha,
  horasTrabajadas,
  onEdit,
  onDelete,
  style,
}) => (
  <View style={[styles.jornadaItem, style]}>
    <View style={styles.jornadaInfo}>
      <Text style={styles.jornadaFecha}>{fecha}</Text>
      <Text style={styles.jornadaHoras}>{horasTrabajadas}h</Text>
    </View>
    <View style={styles.jornadaActions}>
      <TouchableOpacity onPress={onEdit} style={styles.actionButton}>
        <Text style={styles.actionButtonText}>✏️</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onDelete}
        style={[styles.actionButton, styles.deleteButton]}
      >
        <Text style={styles.actionButtonText}>🗑️</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export const Button = ({
  title,
  onPress,
  style,
  disabled,
  loading,
  color = '#007AFF',
}) => (
  <TouchableOpacity
    style={[
      styles.button,
      { backgroundColor: color },
      disabled && styles.buttonDisabled,
      style,
    ]}
    onPress={onPress}
    disabled={disabled || loading}
  >
    {loading ? (
      <ActivityIndicator color="#FFFFFF" />
    ) : (
      <Text style={styles.buttonText}>{title}</Text>
    )}
  </TouchableOpacity>
);

export const Input = ({
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
  style,
  editable = true,
}) => (
  <Text style={[styles.inputValue, !editable && styles.inputDisabled]}>
    {value || placeholder}
  </Text>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  statCard: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 16,
    marginBottom: 12,
  },
  statLabel: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
    marginBottom: 8,
  },
  statValueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  statValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  statUnit: {
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft: 8,
    opacity: 0.9,
  },
  jornadaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  jornadaInfo: {
    flex: 1,
  },
  jornadaFecha: {
    fontSize: 14,
    color: '#333333',
    fontWeight: '500',
    marginBottom: 4,
  },
  jornadaHoras: {
    fontSize: 12,
    color: '#666666',
  },
  jornadaActions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#F0F0F0',
  },
  deleteButton: {
    backgroundColor: '#FFE5E5',
  },
  actionButtonText: {
    fontSize: 16,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  inputValue: {
    fontSize: 16,
    color: '#333333',
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 14,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  inputDisabled: {
    backgroundColor: '#F0F0F0',
  },
});
