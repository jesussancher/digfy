import React from 'react'
import {
    Page,
    Text,
    Document,
    StyleSheet,
    PDFDownloadLink,
    Image,
    View,
    Link,
    Font
} from '@react-pdf/renderer';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    addButton: {
        border: 'solid 1px #69247f',
        color: '#69247f',
        transition: 'all 300ms ease',
        '&:hover': {
            color: '#fff',
            backgroundColor: '#69247f'
        }
    }
}));

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
        // display: 'flex', flexDirection: 'column', alignItems: 'center'
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    },
    author: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 40
    },
    sectionContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    separator: {
        marginTop: 8,
        marginBottom: 8
    },
    section: {
        backgroundColor: '#69247f',
        width: '50%',
        borderRadius: 5,
        color: 'white',
        fontWeight: '700'
    },
    sectionPrice: {
        width: '50%',
        color: '#69247f',
        fontWeight: '700'
    },
    subtitle: {
        fontSize: 20,
        margin: 12,
        textAlign: 'center'
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: 'center'
    },
    texto: {
        margin: 12,
        fontSize: 14,
        textAlign: 'left'
    },
    link: {
        margin: 12,
        textDecoration: 'none',
        color: '#69247f',
        cursor: 'pointer',
        fontSize: 14,
        textAlign: 'left'
    },
    image: {
        width: '25%',
        marginBottom: 100
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey'
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey'
    }
});
const PDF = props => {

    const {data} = props;
    const classes = useStyles();

    const calcFlujo = () => {
        let totalIngresos = 0;
        let totalEgresos = 0;
        if (data.ingresos && data.egresos !== undefined) {
            const ingresos = data.ingresos;
            const egresos = data.egresos;
            for (let i = 0; i < ingresos.length; i++) {
                totalIngresos += parseInt(ingresos[i].price);
            }
            for (let u = 0; u < egresos.length; u++) {
                totalEgresos += parseInt(egresos[u].price);
            }
        }

        const flujoEfectivo = totalIngresos - totalEgresos
        return flujoEfectivo
    }

    const calcNivel = () => {

        let totalIngresos = 0;
        let totalDeudas = 0;
        if (data.ingresos && data.deudas !== undefined) {
            const ingresos = data.ingresos;
            const deudas = data.deudas;
            for (let i = 0; i < ingresos.length; i++) {
                totalIngresos += parseInt(ingresos[i].price);
            }
            for (let u = 0; u < deudas.length; u++) {
                totalDeudas += parseInt(deudas[u].price);
            }
        }
        const nivelEndeudamiento = totalDeudas / totalIngresos
        return (nivelEndeudamiento * 100).toFixed(2)
    }

    const calcConsumo = () => {
        let totalIngresos = 0;
        let totalDeudas = 0;
        if (data.ingresos && data.deudas !== undefined) {
            const deudas = data.deudas;
            const ingresos = data.ingresos;
            for (let i = 0; i < ingresos.length; i++) {
                totalIngresos += parseInt(ingresos[i].price);
            }
            for (let u = 0; u < deudas.length; u++) {
                if (deudas[u].type === "Libre") {
                    totalDeudas += parseInt(deudas[u].price);
                } else if (deudas[u].type === "Diario") {
                    totalDeudas += parseInt(deudas[u].price);
                }
            }
        }
        const deudasConsumo = totalDeudas / totalIngresos
        return (deudasConsumo * 100).toFixed(2)
    }
    /*****stiven pdf */

    const PdfResult = () => (
        <Document>
            <Page style={styles.body}>
                <Image style={styles.image} src={"https://i.ibb.co/2SxkyLv/Digfy-Web-03.png"}/>
                <Text style={styles.title}>
                    {data.name}
                </Text>
                <Text style={styles.subtitle}>
                    Así están tus finanzas
                </Text>
                <View style={styles.separator}></View>
                <View style={styles.separator}></View>
                <View style={styles.separator}></View>
                <View style={styles.sectionContainer}>
                    <View style={styles.section}>
                        <Text break style={styles.text}>
                            Flujo de efectivo
                        </Text>
                    </View>
                    <View style={styles.sectionPrice}>
                        <Text break style={styles.text}>
                            ${calcFlujo()} {props.divisa}
                        </Text>
                    </View>
                </View>
                <View style={styles.separator}></View>
                <View style={styles.sectionContainer}>
                    <View style={styles.section}>
                        <Text break style={styles.text}>
                            Nivel de endeudamiento
                        </Text>
                    </View>
                    <View style={styles.sectionPrice}>
                        <Text break style={styles.text}>
                            {calcNivel()}%
                        </Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.sectionContainer}>
                        <View style={styles.section}>
                            <Text break style={styles.text}>
                                Capacidad de ahorro
                            </Text>
                        </View>
                        <View style={styles.sectionPrice}>
                            <Text break style={styles.text}>
                                {data.save}%
                            </Text>
                        </View>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.sectionContainer}>
                        <View style={styles.section}>
                            <Text break style={styles.text}>
                                Deudas de consumo
                            </Text>
                        </View>
                        <View style={styles.sectionPrice}>
                            <Text break style={styles.text}>
                                {calcConsumo()}%
                            </Text>
                        </View>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.separator}></View>
                    <View style={styles.sectionContainer}>
                            <Text break style={styles.texto}>
                                ¿Qué significan esos indicadores?
                            </Text>
                            <Link break style={styles.Link} src={"https://calendly.com/digfy/30min"}>
                                Agenda tu cita
                            </Link>
                            <Text break style={styles.texto}>
                                Y te explicamos
                            </Text>
                    </View>
                </View>
            </Page>
        </Document>

    );

    Font.register({family: 'Oswald', src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'});
    /********************************** */

    return (
        <PDFDownloadLink
            document={< PdfResult />}
            style={{
            textDecoration: 'none'
        }}
            fileName={"DiagnosticoDigfy.pdf"}>
            {(loading) => (loading
                ? <Button className={classes.addButton}>
                        Descarga tu diagnóstico
                    </Button>
                : <Button className={classes.addButton}>
                    Descarga tu diagnóstico
                </Button>)}
        </PDFDownloadLink>
    )
}

export default React.memo(PDF)