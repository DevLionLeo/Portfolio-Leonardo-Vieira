import { motion } from "motion/react";
import valdirImage from "../../assets/Valdir.png";

function ValdirCard() {
    return (
        <div className="w-full max-w-170 lg:w-137.5 xl:w-150 2xl:w-175 bg-red-950 rounded-2xl hover:shadow-2xl transition-shadow duration-300 mx-auto">
            <div className="m-4 flex gap-5  flex-col items-center sm:flex-row sm:items-start">
                <div className="rounded-2xl shrink-0">
                    <img
                        src={valdirImage}
                        alt="Valdir Project"
                        className="w-80 rounded-lg object-cover"
                    />
                    <h2 className="text-amber-50 text-center sm:text-left text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-display mt-4 sm:mt-5 md:mt-6">
                        Valdir Project
                    </h2>
                    <p className="text-blue-200 mt-2 sm:mt-3 md:mt-4 text-center sm:text-left text-sm sm:text-base md:text-lg"> Technologies: <span className="text-amber-50">Django (Python), React.Js<br /> e MySQL.</span>
                    </p>
                </div>

                <div>
                    <p className="text-amber-50 text-center sm:text-left text-lg mb-2 md:text-lg lg:text-xl xl:text-xl sm:mt-5 md:mt-3">
                        Software para agendamentos e gerenciamento de agenda para serviços de cabelo.
                        Desenvolvido para um cliente cabeleleiro, o software permite que os clientes
                        agendem horários, e o cabeleireiro gerencie sua agenda de forma eficiente e
                        da forma que quiser. Após o desenvolvimento, o software foi entregue ao cliente
                        e está em uso atualmente.
                        <br />
                        <br />
                        <br />
                        Entre em contato comigo para mais informações sobre o projeto, ou para saber
                        como eu trabalho. Fique tranquilo! É totalemente gratuito e sem compromisso.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ValdirCard;