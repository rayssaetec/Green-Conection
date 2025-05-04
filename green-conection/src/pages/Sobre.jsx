import { Rodape } from "../componentes/rodape";
import { Cabecalho } from "../componentes/cabecalho";

const Sobre = () => {
    return (
        <div>
            <Cabecalho />
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}>
                <img src="/images/logo/logo.png" alt="Logo" />
            </div>

            <h1 style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '65px',
                alignItems: 'center',
                fontFamily: 'monospace',
                fontSize: '20',
                fontWeight: 'bolder',
            }}>Sobre nós</h1>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                fontFamily: 'monospace',
                fontSize: '20px',
                fontWeight: '600',
                textAlign: 'center',
                padding: '40px',
                maxWidth: '800px',
                margin: '0 auto'
            }}>
                Nossa empresa nasceu da necessidade de aproximar
                produtores rurais de clientes comuns — aqueles
                que buscam qualidade em produtos e alimentos sem
                agrotóxico com preços justos, sem a necessidade de
                comprar em grandes quantidades, como acontece no
                comércio tradicional. Percebemos que, de um lado,
                produtores tinham dificuldades para escoar sua produção
                de forma justa e direta, enquanto, do outro, consumidores
                desejavam produtos mais frescos e acessíveis do que os
                disponíveis nos supermercados.
                Acreditamos que aproximar o campo da cidade é mais do que
                vender alimentos — é transformar a maneira como nos relacionamos
                com o que consumimos, gerando impacto social, ambiental e econômico positivo para todos.
            </div>

            <div>
                <h1 style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'monospace',
                    fontSize: '20',
                    fontWeight: 'bolder',
                }}>Nossa Missão</h1>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                fontFamily: 'monospace',
                fontSize: '20px',
                fontWeight: '600',
                textAlign: 'center',
                padding: '40px',
                maxWidth: '800px',
                margin: '0 auto'
            }}>
                fortalecer o pequeno e médio produtor, democratizando
                o acesso a alimentos frescos, de qualidade e com preços
                mais justos para todos.
            </div>

            <div>
                <h1 style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'monospace',
                    fontSize: '20',
                    fontWeight: 'bolder',
                }}>Nossa Visão</h1>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                fontFamily: 'monospace',
                fontSize: '20px',
                fontWeight: '600',
                textAlign: 'center',
                padding: '40px',
                maxWidth: '800px',
                margin: '0 auto'
            }}>
                ser a principal ponte entre o campo e a cidade,
                promovendo uma nova forma de consumo que valoriza
                a produção local, reduz desperdícios e gera impacto
                positivo nas comunidades rurais.
            </div>

            <div>
                <h1 style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'monospace',
                    fontSize: '20',
                    fontWeight: 'bolder',
                }}>Valores da Empresa</h1>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                fontFamily: 'monospace',
                fontSize: '20px',
                fontWeight: '600',
                textAlign: 'left',
                padding: '40px',
                maxWidth: '800px',
                margin: '0 auto'
            }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {[ 
                        'Transparência nas relações entre produtores e consumidores.',
                        'Sustentabilidade em toda a cadeia produtiva.',
                        'Valorização do trabalho rural e do comércio justo.',
                        'Qualidade como compromisso central.',
                        'Inovação para melhorar constantemente a experiência de compra e venda.'
                    ].map((item, index) => (
                        <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <span style={{
                                height: '10px',
                                width: '10px',
                                backgroundColor: 'green',
                                borderRadius: '50%',
                                display: 'inline-block',
                                marginRight: '10px'
                            }}></span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '40px',
                marginBottom: '40px',
                width: '100%',
            }}>
                <div style={{
                    flex: 1,
                    height: '3px',
                    backgroundColor: '#000',
                    marginRight: '20px',
                }}></div>
                <h1 style={{
                    fontFamily: 'monospace',
                    fontSize: '18',
                    fontWeight: 'bolder',
                    margin: 0,
                }}>Membros da nossa Equipe</h1>
                <div style={{
                    flex: 1,
                    height: '3px',
                    backgroundColor: '#000',
                    marginLeft: '20px',
                }}></div>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '40px',
                marginBottom: '60px'
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src="/images/Membros/Cristian.jpeg" alt="Diretor criativo e designer" style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        marginBottom: '10px'
                    }} />
                    <p style={{ fontWeight: 'bold', fontFamily: 'monospace', margin: 0 }}>Cristian Marcheti</p>
                    <p style={{ fontStyle: 'italic', fontFamily: 'monospace', fontSize: '14px' }}>Diretor criativo e designer</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src="/images/Membros/Malu.jpeg" alt="Desenvolvedora Web" style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        marginBottom: '10px'
                    }} />
                    <p style={{ fontWeight: 'bold', fontFamily: 'monospace', margin: 0 }}>Maria Luiza Bonato</p>
                    <p style={{ fontStyle: 'italic', fontFamily: 'monospace', fontSize: '14px' }}>Desenvolvedora Web</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src="/images/Membros/Rayssa.jpeg" alt="Programadora" style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        marginBottom: '10px'
                    }} />
                    <p style={{ fontWeight: 'bold', fontFamily: 'monospace', margin: 0 }}>Rayssa Suri</p>
                    <p style={{ fontStyle: 'italic', fontFamily: 'monospace', fontSize: '14px' }}>Programadora</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src="/images/Membros/Vitoria.jpeg" alt="Idealizadora e Co-criadora" style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        marginBottom: '10px'
                    }} />
                    <p style={{ fontWeight: 'bold', fontFamily: 'monospace', margin: 0 }}>Maria Vitoria Silva</p>
                    <p style={{ fontStyle: 'italic', fontFamily: 'monospace', fontSize: '14px' }}>Idealizadora e Co-criadora</p>
                </div>
            </div>
            <Rodape />
        </div>
    );
}

export { Sobre };
