import styles from "../company/company.module.css";
import fachada from "../../assets/images/empresa/fachada.jpeg";

export const Company = () => {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <img src={fachada} alt="Fachada da concessionária" />

        <div className={styles.heroText}>
          <h1>Original Multimarcas</h1>

          <p>
            A <strong>Original Multimarcas</strong> é uma concessionária
            especializada na venda de veículos seminovos e usados de alta
            qualidade. Trabalhamos com transparência, procedência garantida e
            veículos cuidadosamente selecionados para oferecer a melhor
            experiência aos nossos clientes.
          </p>

          <p>
            Nosso compromisso é ajudar você a encontrar o carro ideal com
            segurança, confiança e ótimas condições de pagamento.
          </p>
        </div>
      </section>

      <section className={styles.about}>
        <h2>Quem Somos</h2>

        <p>
          Com anos de experiência no mercado automotivo, a Original Multimarcas
          se destaca pela qualidade dos veículos e pelo atendimento
          personalizado. Nossa equipe está sempre pronta para auxiliar você em
          todas as etapas da compra.
        </p>

        <p>
          Trabalhamos com veículos revisados, documentação regularizada e
          garantia de procedência para que você tenha total tranquilidade na sua
          compra.
        </p>
      </section>

      <section className={styles.differentials}>
        <h2>Por que escolher a Original Multimarcas?</h2>

        <div className={styles.cards}>
          <div className={styles.cardsitems}>
            <h3>Veículos Selecionados</h3>
            <p>Todos os carros passam por análise para garantir qualidade.</p>
          </div>

          <div className={styles.cardsitems}>
            <h3>Procedência Garantida</h3>
            <p>Documentação segura e histórico confiável.</p>
          </div>

          <div className={styles.cardsitems}>
            <h3>Condições Especiais</h3>
            <p>Financiamento facilitado e ótimas oportunidades.</p>
          </div>

          <div className={styles.cardsitems}>
            <h3>Atendimento de Qualidade</h3>
            <p>Equipe preparada para encontrar o carro ideal para você.</p>
          </div>
        </div>
      </section>

      <section className={styles.mapSection}>
        <h2>Onde Estamos</h2>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.8269805777677!2d-49.9805577!3d-22.882849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c01d44b5b7ec5d%3A0x52d27462d3ae0e2c!2sOriginal%20Multimarcas!5e0!3m2!1spt-BR!2sbr!4v1773060890869!5m2!1spt-BR!2sbr"
          className={styles.map}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </main>
  );
};
