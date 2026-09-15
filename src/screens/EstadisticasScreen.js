import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useJornada } from '../context/JornadaContext';
import { Card, StatCard } from '../components/CommonComponents';
import {
  calculateHoursByYear,
  getAverageHours,
  getCurrentMonthYear,
  calculateHoursByMonth,
} from '../utils/calculators';

export default function EstadisticasScreen() {
  const { jornadas, loading } = useJornada();
  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear()
  );
  const { month: currentMonth } = getCurrentMonthYear();

  const horasAño = calculateHoursByYear(jornadas, selectedYear);
  const horasMes = calculateHoursByMonth(
    jornadas,
    selectedYear,
    currentMonth
  );
  const promedio = getAverageHours(jornadas);
  const totalJornadas = jornadas.length;

  const handlePrevYear = () => {
    setSelectedYear(selectedYear - 1);
  };

  const handleNextYear = () => {
    setSelectedYear(selectedYear + 1);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>📊 Estadísticas</Text>
        <Text style={styles.subtitle}>Análisis de tu desempeño</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Selector de año */}
        <View style={styles.yearSelector}>
          <TouchableOpacity
            onPress={handlePrevYear}
            style={styles.yearButton}
          >
            <Text style={styles.yearButtonText}>‹</Text>
          </TouchableOpacity>
          <Text style={styles.yearText}>{selectedYear}</Text>
          <TouchableOpacity
            onPress={handleNextYear}
            style={styles.yearButton}
          >
            <Text style={styles.yearButtonText}>›</Text>
          </TouchableOpacity>
        </View>

        {/* Tarjetas de estadísticas */}
        <StatCard
          label="Total de horas anuales"
          value={horasAño.toFixed(1)}
          unit="horas"
        />

        <StatCard
          label="Horas este mes"
          value={horasMes.toFixed(1)}
          unit="horas"
        />

        <StatCard
          label="Promedio por jornada"
          value={promedio.toFixed(1)}
          unit="horas"
        />

        <StatCard
          label="Total de jornadas"
          value={totalJornadas}
          unit="registros"
        />

        {/* Desglose mensual */}
        <Card>
          <Text style={styles.sectionTitle}>📅 Desglose Mensual {selectedYear}</Text>
          {renderMonthlyBreakdown()}
        </Card>

        {/* Información */}
        <Card>
          <Text style={styles.sectionTitle}>💡 Información</Text>
          <Text style={styles.info}>
            Horas objetivo mensual: 160h
          </Text>
          <Text style={styles.info}>
            Meta anual: 1,920h
          </Text>
        </Card>
      </ScrollView>
    </View>
  );

  function renderMonthlyBreakdown() {
    const months = [
      'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
      'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
    ];

    return (
      <View>
        {months.map((month, index) => {
          const hours = calculateHoursByMonth(jornadas, selectedYear, index + 1);
          const percentage = Math.min((hours / 160) * 100, 100);
          return (
            <View key={index} style={styles.monthRow}>
              <Text style={styles.monthName}>{month}</Text>
              <View style={styles.monthBarContainer}>
                <View
                  style={[
                    styles.monthBar,
                    { 
                      width: `${percentage}%`,
                      backgroundColor: percentage >= 100 ? '#22C55E' : '#007AFF'
                    }
                  ]}
                />
              </View>
              <Text style={styles.monthHours}>{hours.toFixed(0)}h</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    backgroundColor: '#007AFF',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#E8F4FF',
  },
  content: {
    flex: 1,
    paddingVertical: 16,
  },
  yearSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 12,
  },
  yearButton: {
    padding: 8,
    marginHorizontal: 12,
  },
  yearButtonText: {
    fontSize: 20,
    color: '#007AFF',
    fontWeight: '600',
  },
  yearText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    minWidth: 60,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 12,
  },
  monthRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  monthName: {
    fontSize: 12,
    color: '#666666',
    width: 30,
    fontWeight: '500',
  },
  monthBarContainer: {
    flex: 1,
    height: 24,
    backgroundColor: '#F0F0F0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  monthBar: {
    height: '100%',
    borderRadius: 4,
  },
  monthHours: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333333',
    width: 40,
    textAlign: 'right',
  },
  info: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
    lineHeight: 20,
  },
});
