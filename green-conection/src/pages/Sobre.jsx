
import { Cabecalho } from "../componentes/cabecalho";

const Sobre = () => {
    return (
        <div>
            <Cabecalho/>
            <div style={{ display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            }}>

            <img src="/images/logo/logo.png" alt="Logo"/>
            </div>
            <h1 style={{ display: 'flex', 
                justifyContent: 'center',
                marginTop: '65px', 
                alignItems: 'center',
                fontFamily: 'monospace',
                fontSize:'20',
                fontWeight: 'bolder',}}>Sobre nós</h1>
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
            <h1 style={{ display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                fontFamily: 'monospace',
                fontSize:'20',
                fontWeight: 'bolder',}}>Nossa Missão</h1>
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
            <h1 style={{ display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                fontFamily: 'monospace',
                fontSize:'20',
                fontWeight: 'bolder',}}>Nossa Visão</h1>
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
            <h1 style={{ display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                fontFamily: 'monospace',
                fontSize:'20',
                fontWeight: 'bolder',}}>Valores da Empresa</h1>
            </div>
            <div>
                <ul>
                <li style={{display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                fontFamily: 'monospace',
                fontSize:'20',
                fontWeight: 'bolder'}}>Transparência nas relações entre produtores e consumidores.</li>
                <li style={{display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                fontFamily: 'monospace',
                fontSize:'20',
                fontWeight: 'bolder'}}>Sustentabilidade em toda a cadeia produtiva.</li>
                <li style={{display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                fontFamily: 'monospace',
                fontSize:'20',
                fontWeight: 'bolder'}}>Valorização do trabalho rural e do comércio justo.</li>
                <li style={{display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                fontFamily: 'monospace',
                fontSize:'20',
                fontWeight: 'bolder'}}>Qualidade como compromisso central.</li>
                <li style={{display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                fontFamily: 'monospace',
                fontSize:'20',
                fontWeight: 'bolder'}}>Inovação para melhorar constantemente a experiência de compra e venda.</li>
                </ul>
            </div>
        </div>
            
    );
}

export { Sobre };