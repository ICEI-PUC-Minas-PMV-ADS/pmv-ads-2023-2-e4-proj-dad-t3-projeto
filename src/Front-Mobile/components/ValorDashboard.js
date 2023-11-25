import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ValorDashboard(props) {
  const valores = props.valores;
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (valores && valores.length > 0) {
      const totalLancamentos = valores.length;
      const valorTotal = valores.reduce((acc, item) => {
        return {
          valorFaturadoMes: acc.valorFaturadoMes + +item.valorFaturadoMes,
          numeroVendas: acc.numeroVendas + +item.numeroVendas,
          numeroItensVendidos:
            acc.numeroItensVendidos + +item.numeroItensVendidos,
          precoMedioProduto: acc.precoMedioProduto + +item.precoMedioProduto,
          clientesAtendidos: acc.clientesAtendidos + +item.clientesAtendidos,
          taxaConversao: acc.taxaConversao + +item.taxaConversao,
        };
      });

      setResult({
        valorFaturadoMes: valorTotal.valorFaturadoMes,
        numeroVendas: valorTotal.numeroVendas,
        numeroItensVendidos: valorTotal.numeroItensVendidos,
        precoMedioProduto: valorTotal.precoMedioProduto / totalLancamentos,
        clientesAtendidos: valorTotal.clientesAtendidos,
        taxaConversao: valorTotal.taxaConversao / totalLancamentos,
      });
    } else {
      console.log('Não há valores');
      setResult(null);
    }
  }, [valores]);

  return (
    <View style={styles.container}>
      {result ? (
        <View style={styles.mainContainer}>
          <View style={styles.main}>
            <View style={styles.card}>
              <Text style={styles.mainText}>Valor Faturado</Text>
              <Text style={styles.mainValue}>
                R$ {result.valorFaturadoMes.toLocaleString('pt-BR')}
              </Text>
            </View>
          </View>
          <View style={styles.main}>
            <View style={styles.card}>
              <Text style={styles.mainText}>Número de Vendas</Text>
              <Text style={styles.mainValue}>{result.numeroVendas}</Text>
            </View>
          </View>
          <View style={styles.main}>
            <View style={styles.card}>
              <Text style={styles.mainText}>Taxa de Conversão</Text>
              <Text style={styles.mainValue}>
                {result.taxaConversao.toFixed(2)}%
              </Text>
            </View>
          </View>
          <View style={styles.main}>
            <View style={styles.card}>
              <Text style={styles.mainText}>Itens Vendidos</Text>
              <Text style={styles.mainValue}>{result.numeroItensVendidos}</Text>
            </View>
          </View>
          <View style={styles.main}>
            <View style={styles.card}>
              <Text style={styles.mainText}>Valor Médio (R$)</Text>
              <Text style={styles.mainValue}>
                R$ {result.precoMedioProduto.toFixed(2)}
              </Text>
            </View>
          </View>
          <View style={styles.main}>
            <View style={styles.card}>
              <Text style={styles.mainText}>Clientes Atendidos</Text>
              <Text style={styles.mainValue}>{result.clientesAtendidos}</Text>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>Nenhum dado foi encontrado</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '90%',
    marginTop: 20,
  },
  mainContainer: {
    height: '100%',
    justifyContent: 'space-around',
  },
  main: {
    width: '100%',
    height: 80,
    borderRadius: 10,
  },
  card: {
    height: '100%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#e5f0ff',
  },
  mainText: {
    color: '#0A376E',
    fontWeight: 'bold',
  },
  mainValue: {
    color: '#0A376E',
    fontWeight: 'bold',
    fontSize: 18,
  },
  empty: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: '#0A376E',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
