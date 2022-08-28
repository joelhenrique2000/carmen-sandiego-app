import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import MapView, {
  Callout,
  Marker,
  Polyline,
  PROVIDER_GOOGLE,
  Region,
} from "react-native-maps";
import styles from "./styles";

interface Local {
    id?: number;
    cor: string;
    nome: string;
    imagem_url?: string;
    latitude: number;
    longitude: number;
}

export default function App() {

    const [isMostrarLocais, setIsMostrarLocais] = useState<Boolean>(false);
    const [locais, setLocais] = useState<Local[]>([
    {
        id: 0,
        cor: "#3e0e7d",
        nome: "Local 2",
        latitude: -8.8906,
        longitude: -36.4931,
        imagem_url: '',
    },
    {
        id: 1,
        cor: "#7d0e22",
        nome: "Local 1",
        latitude: -7.8906,
        longitude: -35.4931,
        imagem_url: '',
    },
    {
        id: 2,
        cor: "#0e287d",
        nome: "Local 3",
        latitude: -9.8906,
        longitude: -37.4931,
        imagem_url: '',
    },
    {
        id: 3,
        cor: "#0e7d1b",
        nome: "Local 4",
        latitude: -10.8906,
        longitude: -37.4931,
        imagem_url: '',
    },
    ]);

    const [region, setRegion] = useState<Region>();

    async function mostrarLocais() {
        setIsMostrarLocais(true);
        setRegion({ latitude: locais[0].latitude, longitude: locais[0].longitude, latitudeDelta: 5, longitudeDelta: 5 });
    }

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={region}
            >
                {isMostrarLocais && (
                <>
                    <Polyline
                        coordinates={locais.map(({ latitude, longitude }) => ({ latitude, longitude }))}
                        strokeColor="#f24112"
                        strokeWidth={3}
                    />
                    {locais.map((local) => (
                        <Marker
                            key={local.id}
                            calloutAnchor={{
                                x: 2.9,
                                y: 0.8,
                            }}
                            coordinate={{
                                latitude: Number(local.latitude),
                                longitude: Number(local.longitude),
                            }}
                        >
                            <>
                                <View style={{ backgroundColor: local.cor, ...styles.pin}}>
                                    <Text style={styles.pinLabel}>{local.nome}</Text>
                                </View>
                                <Callout tooltip>
                                <View style={styles.calloutContainer}>
                                    <Text style={styles.calloutText}>{"Latitude e longitude"}</Text>
                                    <Text style={styles.calloutSmallText}>{`${local.latitude}, ${local.longitude}`}</Text>
                                </View>
                                </Callout>
                            </>
                        </Marker>
                    ))}
                </>
                )}
            </MapView>

            <View style={styles.footer}>
                <Button title="Where's CS?" onPress={mostrarLocais} />
            </View>
        </View>
    );
}