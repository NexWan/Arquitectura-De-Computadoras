
$("#unidad1").html(
    `<p><span class="temario">&nbsp;</span></p>
           <h2>Arquitectura de computo</h2>
            <div id="tabs">
                <ul class="mainIndex">
                    <li><a href="#tabs-1">Modelo de arquitectura de computo</a></li>
                    <li><a href="#tabs-2">Analisis de los componentes</a></li>
                </ul>
                <br>
                <div id="tabs-1">
                    <div id="tab-tabs">
                        <ul class="index red">
                            <li><a href="#tab-tab1">Clasicas</a></li>
                            <li><a href="#tab-tab2" >Segmentadas</a></li>
                            <li><a href="#tab-tab3" >Multiprocesador</a></li>
                        </ul>
                        <div id="tab-tab1">
                            <h2>Clasicas</h2>
                            <p class="content">
                                En el campo de la informática, existen tres modelos de arquitectura clásica que se han utilizado y evolucionado a lo largo de la historia:
                            </p>
                            <dl>
                                <dt>Arquitectura de von Neumann</dt>
                                <dd>
                                    desarrollada por John von Neumann en la década de 1940, es el modelo más utilizado en la actualidad. Se caracteriza por tener una memoria que almacena tanto datos como instrucciones, y una unidad central de procesamiento (CPU) que ejecuta las instrucciones almacenadas en la memoria.<br>
                                    <img src="media/imgs/Arquitecturaneumann.jpg" alt="" class="contentImgs">
                                </dd>
                                <dt>Arquitectura Harvard</dt>
                                <dd>
                                    desarrollada en la década de 1930, separa la memoria en dos bloques distintos para almacenar datos y programas, lo que permite un acceso más rápido a los datos. Sin embargo, es menos flexible que la arquitectura de von Neumann.
                                    <img src="media/imgs/image001.webp" alt="" class="contentImgs">
                                </dd>
                                <dt>Arquitectura RISC</dt>
                                <dd>
                                    se desarrolló en la década de 1980 para mejorar el rendimiento de las CPU. Se caracteriza por tener un conjunto reducido de instrucciones simples, lo que aumenta la velocidad de ejecución de las instrucciones y reduce la complejidad del diseño de la CPU.
                                    <img src="media/imgs/ARQUITECTURA-DE-PROCESADOR-SOC-TIPO-RISC-TOMADO-DE-1.png" alt="" class="contentImgs">
                                </dd>
                            </dl>
                        </div>
                        <div id="tab-tab2">
                            <h2>Segmentadas</h2>
                            <p class="content">En el ámbito de la informática, las arquitecturas segmentadas son una forma de mejorar el rendimiento de las CPU, dividiendo el proceso de ejecución de instrucciones en segmentos más pequeños y especializados. Algunos modelos de arquitecturas segmentadas son:</p>
                            <dl>
                                <dt>Arquitectura pipelining</dt>
                                <dd> es una técnica que divide el proceso de ejecución de instrucciones en una serie de etapas o segmentos, de tal forma que cada etapa puede trabajar en una instrucción diferente al mismo tiempo. Esto mejora el rendimiento de la CPU al permitir la ejecución simultánea de varias instrucciones.
                                    <img src="media/imgs/1200px-Pipeline,_4_stage_with_bubble.svg.png" alt="" class="contentImgs">
                                </dd>
                                <dt>Arquitectura superescalar</dt>
                                <dd>es una técnica que permite que una CPU ejecute múltiples instrucciones al mismo tiempo, en lugar de esperar a que se complete una antes de empezar con la siguiente. Esto se logra mediante la inclusión de múltiples unidades funcionales dentro de la CPU, cada una de las cuales puede ejecutar una instrucción diferente.
                                    <img src="media/imgs/superescalar.png" alt="" class="contentImgs">
                                </dd>
                                <dt>Arquitectura VLIW</dt>
                                <dd>es una técnica que permite que una CPU ejecute múltiples instrucciones en paralelo, agrupando varias instrucciones en una sola palabra de instrucción. Cada palabra de instrucción contiene varias instrucciones que se ejecutan simultáneamente en unidades funcionales separadas dentro de la CPU.
                                    <img src="media/imgs/vliw.png" alt="" class="contentImgs">
                                </dd>
                            </dl>
                        </div>
                        <div id="tab-tab3">
                            <h2>De multiprcesador</h2>
                            <dl>
                                <dt>Simetrica multiprocesador (SMP)</dt>
                                <dd>es una arquitectura en la que dos o más procesadores idénticos comparten la misma memoria y dispositivos de entrada/salida. En un sistema SMP, cada procesador puede ejecutar cualquier tarea disponible en el sistema.
                                    <img src="media/imgs/smpo.gif" alt="" class="contentImgs">
                                </dd>
                                <dt>Asimetrica Multiprocesador</dt>
                                <dd>en un sistema ASMP, los procesadores tienen diferentes funciones y responsabilidades. Por ejemplo, puede haber un procesador dedicado a la gestión del sistema operativo, mientras que otros procesadores se encargan de tareas específicas.
                                    <img src="media/imgs/asimetrico.jpg" alt="" class="contentImgs">
                                </dd>
                                <dt>Multiprocesador no uniforma (NUMA)</dt>
                                <dd>en un sistema NUMA, los procesadores tienen acceso a diferentes bancos de memoria y a diferentes dispositivos de entrada/salida. Esta arquitectura se utiliza en sistemas de alta escalabilidad para mejorar el rendimiento y reducir la latencia de la memoria.
                                    <img src="media/imgs/numa.webp" alt="" class="contentImgs">
                                </dd>
                                <dt>Cluster de computadoras</dt>
                                <dd> es una arquitectura de multiprocesador distribuida, en la que un grupo de computadoras independientes se conectan a través de una red de alta velocidad para trabajar en tareas comunes. Cada computadora en el cluster puede tener su propio sistema operativo y recursos de hardware dedicados.
                                    <img src="media/imgs/cluster.jpg" alt="" class="contentImgs">
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div id="tabs-2">
                    <div id="tab-tabs2">
                        <ul class="index red">
                            <li><a href="#tab-cpu">CPU</a></li>
                            <li><a href="#tab-memoria">Memoria</a></li>
                            <li><a href="#tab-ES">Manejo E/S</a></li>
                            <li><a href="#tab-buses">Buses</a></li>
                            <li><a href="#tab-interrupciones">Interupcuiones</a></li>
                        </ul>
                        <div id="tab-cpu">
                            <h2>CPU</h2>
                            <p class="content">La CPU (Central Processing Unit) o Unidad Central de Procesamiento, es el componente principal de un ordenador o computadora que se encarga de realizar las operaciones y cálculos necesarios para ejecutar programas y procesar datos. También se conoce como microprocesador o procesador.
                                La CPU está compuesta por una serie de circuitos integrados, incluyendo la unidad de control, la unidad aritmético-lógica, la memoria caché y el bus de datos. La unidad de control es la encargada de interpretar y ejecutar las instrucciones de los programas, mientras que la unidad aritmético-lógica realiza las operaciones matemáticas y lógicas necesarias.
                                El procesador se comunica con los demás componentes del sistema a través de los buses de datos y de control, y se conecta a la placa madre o motherboard a través de un zócalo. La velocidad de procesamiento de una CPU se mide en MHz (megahercios) o GHz (gigahercios), y está determinada por la frecuencia del reloj interno del procesador.</p>
                            <div id="tab-tab-tabs2">
                                <ul class="index blue">
                                    <li><a href="#tab-arq">Arquitecturas</a></li>
                                    <li><a href="#tab-tipo">Tipos de cpu</a></li>
                                    <li><a href="#tab-carac">Caracteristicas</a></li>
                                </ul>
                                <div id="tab-arq">
                                    <dl>
                                        <dt>Arquitecturas</dt>
                                        <dd>La arquitectura de una CPU (Central Processing Unit) se refiere a la estructura interna y diseño de sus componentes que permiten la ejecución de instrucciones y procesamiento de datos. Algunas de las arquitecturas de CPU más comunes son:
                                            <ul class="listContent">
                                                <li><b class="content">Arquitectura CISC: </b>
                                                    <p class="content">esta arquitectura utiliza un conjunto complejo de instrucciones, que pueden realizar varias operaciones a la vez, lo que la hace eficiente en la ejecución de programas complejos. Las CPUs con esta arquitectura suelen tener una alta densidad de transistores y altas velocidades de reloj.</p>
                                                     <img src="media/imgs/cisc.png" alt="" class="contentImgs">   
                                                </li>
                                                <li>
                                                    <b class="content">Arquitectura RISC</b>
                                                    <p class="content">esta arquitectura utiliza un conjunto reducido de instrucciones simples, lo que la hace más eficiente en la ejecución de tareas sencillas y repetitivas. Las CPUs con esta arquitectura suelen tener menor densidad de transistores y menor consumo energético, pero una velocidad de reloj más alta.</p>
                                                    <img src="media/imgs/risc.jpg" alt="" class="contentImgs">
                                                </li>
                                                <li>
                                                    <b class="content">Arquitectura VLIW</b>
                                                    <p class="content">esta arquitectura combina múltiples instrucciones en una única palabra de instrucción, lo que permite una ejecución más rápida de operaciones paralelas y una mayor eficiencia de los recursos de la CPU.</p>
                                                    <img src="media/imgs/vliw.png" alt="" class="contentImgs">
                                                </li>
                                                <li>
                                                    <b class="content">Arquitectura SIMD</b>
                                                    <p class="content">esta arquitectura utiliza una única instrucción para procesar múltiples datos al mismo tiempo, lo que la hace eficiente en aplicaciones de procesamiento de imágenes y video.</p>
                                                    <img src="media/imgs/simd.png" alt="" class="contentImgs">
                                                </li>
                                                <li>
                                                    <b class="content">Arquitectura MIMD</b>
                                                    <p class="content">esta arquitectura permite la ejecución de múltiples instrucciones en múltiples conjuntos de datos, lo que la hace eficiente en aplicaciones de procesamiento en paralelo, como la computación distribuida y la supercomputación.</p>
                                                    <img src="media/imgs/MIMD.svg.png" alt="" class="contentImgs">
                                                </li>
                                            </ul>
                                        </dd>
                                    </dl>
                                </div>
                                <div id="tab-tipo">
                                    <dl>
                                        <dt>Tipos de CPU</dt>
                                        <dd>Existen varios tipos de CPU (Central Processing Unit) según su diseño, velocidad de reloj y la cantidad de núcleos que poseen. Algunos de los tipos de CPU más comunes son:
                                            <ul class="listContent">
                                                <li>
                                                    <b>CPU de un solo nucleo:</b>
                                                    <p>es un procesador que contiene un solo núcleo y es capaz de procesar una instrucción a la vez. Es el tipo de CPU más común en las computadoras personales y portátiles.</p>
                                                    <img src="media/imgs/mononucleo.webp" alt="" class="contentImgs">
                                                </li>
                                                <li>
                                                    <b>CPU multinucleo:</b>
                                                    <p>es un procesador que contiene dos o más núcleos, lo que permite procesar varias instrucciones simultáneamente. Los procesadores de cuatro núcleos son los más comunes en la actualidad, aunque también existen procesadores de seis, ocho y hasta dieciséis núcleos.</p>
                                                    <img src="media/imgs/multinucleo.webp" alt="" class="contentImgs">
                                                </li>
                                                <li>
                                                    <b>CPU arquitectura ARM:</b>
                                                    <p>es una arquitectura RISC diseñada específicamente para dispositivos móviles y sistemas embebidos. Los procesadores ARM tienen una alta eficiencia energética y se utilizan en smartphones, tablets y otros dispositivos portátiles.</p>
                                                    <img src="media/imgs/arm.webp" alt="" class="contentImgs">
                                                </li>
                                                <li><b>CPU arquitectura x86</b>
                                                    <p> es una arquitectura CISC utilizada en las computadoras personales y portátiles con procesadores de Intel y AMD. Los procesadores x86 son capaces de ejecutar una amplia variedad de programas y sistemas operativos.</p>
                                                    <img src="media/imgs/x86.jpg" alt="" class="contentImgs">
                                                </li>
                                            </ul>
                                        </dd>
                                    </dl>
                                </div>
                                <div id="tab-carac">
                                    <dl>
                                        <dt>Caracteristicas</dt>
                                        <dd>
                                            El CPU (Central Processing Unit) es el cerebro de la computadora y es responsable de procesar las instrucciones y datos que recibe de los programas y dispositivos externos. Algunas de las características de un CPU son:
                                            <ul class="listContent">
                                                <li>
                                                    <b>Velocidad de reloj</b>
                                                    <p>se refiere a la velocidad a la que el CPU ejecuta las instrucciones, medida en GHz (Gigahertz). Cuanto mayor sea la velocidad de reloj, más rápido será el procesador.</p>
                                                </li>
                                                <li>
                                                    <b>Numero de nucleos</b>
                                                    <p>se refiere a la cantidad de núcleos que tiene el CPU. Los procesadores de varios núcleos pueden realizar varias tareas al mismo tiempo, lo que los hace más eficientes.</p>
                                                </li>
                                                <li>
                                                    <b>Arquitectura</b>
                                                    <p>se refiere al diseño interno del CPU y las instrucciones que utiliza para procesar los datos. Las arquitecturas más comunes son CISC y RISC.</p>
                                                </li>
                                                <li>
                                                    <b>Cache</b>
                                                    <p> es una memoria de acceso rápido que se utiliza para almacenar temporalmente datos e instrucciones que el CPU utiliza con frecuencia. Un mayor tamaño de caché puede mejorar el rendimiento del CPU.</p>
                                                </li>
                                                <li>
                                                    <b>Consumo de energia</b>
                                                    <p>se refiere a la cantidad de energía que consume el CPU para realizar su trabajo. Un menor consumo de energía puede prolongar la duración de la batería en dispositivos portátiles.</p>
                                                </li>
                                                <li>
                                                    <b>Tecnologia de fabricacion</b>
                                                    <p> se refiere a la tecnología utilizada para fabricar el CPU, medida en nanómetros (nm). Cuanto menor sea el tamaño de fabricación, más transistores pueden ser colocados en el CPU, lo que puede mejorar su rendimiento.</p>
                                                </li>
                                                <li>
                                                    <b>Compatibilidad</b>
                                                    <p> se refiere a la capacidad del CPU para ejecutar diferentes sistemas operativos y software. Los procesadores x86 son compatibles con la mayoría de los sistemas operativos y programas de software.</p>
                                                </li>
                                            </ul>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div id="tab-memoria">
                            <h2>Memoria</h2>
                            <p class="content">La memoria en computación se refiere a la capacidad de almacenamiento de datos y programas en un dispositivo electrónico, como una computadora. Es esencial para el funcionamiento de cualquier sistema informático, ya que permite a la computadora acceder y utilizar la información que necesita para llevar a cabo tareas específicas.</p>
                            <div id="memoriaIndex">
                                <ul class="index blue">
                                    <li><a href="#memoriaConcepto">Conceptos basicos del manejo de memoria</a></li>
                                    <li><a href="#memoriaPrincial">Memoria principal conductora</a></li>
                                    <li><a href="#memoriaCache">Memoria cache</a></li>
                                </ul>
                                <div id="memoriaConcepto" class="content">
                                    <dl>
                                        <dt>Conceptos basicos del manejo de memoria</dt>
                                        <dd>El manejo de memoria en computación es un conjunto de técnicas y estrategias utilizadas por el sistema operativo para administrar la memoria de la computadora. A continuación, se describen algunos conceptos básicos del manejo de memoria:
                                            <ul class="listContent">
                                                <li><b>Memoria física:</b>
                                                    <br>es la memoria real instalada en la computadora, como la RAM.</li>
                                                <li><b>Memoria virtual:</b>
                                                    <br>es una extensión de la memoria física que utiliza el disco duro para almacenar datos temporales cuando no hay suficiente memoria RAM disponible. El sistema operativo utiliza técnicas de intercambio de memoria para transferir datos entre la RAM y el disco duro, lo que permite que la computadora tenga acceso a más memoria de la que tiene instalada físicamente.</li>
                                                <li><b>Administración de memoria:</b>
                                                    <br>es el proceso de asignar y liberar memoria a las aplicaciones que se están ejecutando. El sistema operativo utiliza algoritmos de administración de memoria para garantizar que cada aplicación tenga acceso a la cantidad necesaria de memoria para su correcto funcionamiento.</li>
                                                <li><b>Fragmentación de memoria:</b>
                                                    <br>ocurre cuando la memoria libre disponible está dividida en pequeñas secciones no contiguas. Esto puede impedir que se asignen grandes bloques de memoria a las aplicaciones que los necesitan, lo que puede disminuir el rendimiento general del sistema.</li>
                                                <li><b>Memoria compartida:</b>
                                                    <br>se utiliza en sistemas multiprocesador y permite que varios procesos compartan el mismo espacio de memoria. Esto puede mejorar el rendimiento y reducir la necesidad de duplicar datos en diferentes procesos.</li>
                                                <li><b>Fuga de memoria:</b>
                                                    <br>ocurre cuando una aplicación no libera la memoria que ya no está utilizando. Con el tiempo, esto puede agotar la memoria disponible y causar que el sistema se vuelva inestable o se bloquee.</li>
                                            </ul>
                                        </dd>
                                    </dl>
                                </div>
                                <div id="memoriaPrincial" class="content">
                                    <h3>Memoria Principal semiconductora</h3>
                                    <p class="content">La memoria principal semiconductora es un tipo de memoria de acceso aleatorio (RAM) que se utiliza en la mayoría de las computadoras modernas. Como su nombre indica, utiliza materiales semiconductores (como el silicio) para almacenar y acceder a los datos.
                                        La memoria principal semiconductora se divide en dos tipos principales: memoria estática (SRAM) y memoria dinámica (DRAM). La SRAM es más rápida y cara, y se utiliza principalmente en cachés de nivel 1 y 2. La DRAM es más lenta y económica, y se utiliza en la memoria principal de la mayoría de las computadoras.
                                        La memoria principal semiconductora es volátil, lo que significa que los datos almacenados en ella se pierden cuando se apaga la computadora o se pierde la alimentación eléctrica. Por lo tanto, se requiere de una fuente de energía constante para mantener los datos en la memoria.
                                        La memoria principal semiconductora es una parte crítica del sistema de una computadora, ya que afecta directamente el rendimiento. Cuanta más memoria RAM tenga una computadora, más programas podrá ejecutar al mismo tiempo y más rápido podrá trabajar con ellos. Sin embargo, si una computadora tiene demasiados programas abiertos o si los programas utilizan mucha memoria, la memoria RAM puede llenarse y hacer que el sistema se vuelva lento o incluso se bloquee. Por lo tanto, es importante tener suficiente memoria RAM para las necesidades de cada usuario.</p>
                                        <img src="media/imgs/ram.jpg" alt="" class="contentImgs">
                                </div>
                                <div id="memoriaCache" class="content">
                                    <h3>Memoria cache</h3>
                                    <p class=content>La memoria caché es una memoria de alta velocidad y muy pequeña que se encuentra en la CPU (unidad central de procesamiento) de una computadora. Su objetivo principal es mejorar el rendimiento de la computadora mediante el almacenamiento temporal de datos que se utilizan con frecuencia.
                                        La memoria caché se divide en varios niveles, siendo el nivel 1 (L1) el más rápido y cercano a la CPU y el nivel 3 (L3) el más lento y alejado. Cada nivel tiene una cantidad de memoria caché diferente, y los datos que se almacenan en ella son los que la CPU predice que se utilizarán a continuación.
                                        Cuando la CPU necesita acceder a los datos almacenados en la memoria principal, primero busca en la memoria caché para ver si los datos ya se encuentran allí. Si los datos están en la memoria caché, la CPU puede acceder a ellos más rápido que si tuviera que buscarlos en la memoria principal. Si los datos no están en la memoria caché, se buscan en la memoria principal y se copian a la memoria caché para un acceso más rápido en el futuro.
                                        La memoria caché es una parte importante del rendimiento de una computadora moderna, ya que permite una mayor eficiencia en la realización de tareas y una reducción en el tiempo de espera. La cantidad y velocidad de la memoria caché varía según el tipo de procesador y la computadora.
                                    </p>
                                    <img src="media/imgs/cache.jpg" alt="" class="contentImgs">
                                </div>
                            </div>
                        </div>
                        <div id="tab-ES">
                            <h2>Manejo de entrada/salida</h2>
                            <p class="content">El manejo de entrada/salida (E/S) se refiere a la forma en que un programa interactúa con los dispositivos de entrada y salida de un sistema informático. La entrada se refiere a cualquier información que el programa recibe, mientras que la salida se refiere a cualquier información que el programa produce.</p>
                            <div id="tab-ES-inner">
                                <ul id="indexEs" class="index blue">
                                    <li><a href="#modES">Modulos de entrada/salida</a></li>
                                    <li><a href="#ESprog">Entrada/salida programada</a></li>
                                    <li><a href="#ACCDIRMEM">Acceso directo a memoria</a></li>
                                    <li><a href="#CANPRES">Canales y procesadores de entrada/salida</a></li>
                                </ul>
                                <div id="modES">
                                   <h3>Modulos de entrada/salida</h3>
                                   <p class="content">En la arquitectura de computadoras, los módulos de entrada/salida son componentes hardware que se utilizan para controlar y coordinar el flujo de datos entre la CPU y los dispositivos de entrada/salida. Estos módulos se encuentran en la interfaz de E/S, que es el punto de conexión entre la CPU y los dispositivos externos. <br>
                                   Algunos de los módulos de E/S más comunes en la arquitectura de computadoras son:
                                   </p>
                                   <ul class="listContent">
                                        <li><b>Controlador de disco:</b> es un módulo de E/S que se utiliza para controlar el acceso a los dispositivos de almacenamiento de datos, como los discos duros y las unidades flash.</li>
                                        <li><b>Controlador de red:</b> es un módulo de E/S que se utiliza para controlar el acceso a la red y manejar la transmisión y recepción de datos a través de los dispositivos de red, como los adaptadores de red y los routers.</li>
                                        <li><b>Controlador de pantalla:</b> es un módulo de E/S que se utiliza para controlar la salida de gráficos y texto a la pantalla.</li>
                                        <li><b>Controlador de teclado y mouse:</b> es un módulo de E/S que se utiliza para controlar la entrada de datos desde el teclado y el mouse.</li>
                                        <li><b>Controlador de puerto serie:</b> es un módulo de E/S que se utiliza para controlar la comunicación serie, como la comunicación entre una computadora y un dispositivo periférico a través de un puerto serie.</li>
                                    </ul>
                                </div>
                                <div id="ESprog">
                                    <h3>Entrada/salida programada</h3>
                                    <p class="content">La E/S programada es una técnica de entrada/salida en la que el procesador realiza la transferencia de datos entre el dispositivo de E/S y la memoria principal. En este método, el procesador realiza una instrucción de entrada/salida que espera a que el dispositivo de E/S esté listo para enviar o recibir datos. Cuando el dispositivo de E/S está listo, se inicia la transferencia de datos y el procesador la realiza mediante una secuencia de operaciones de lectura o escritura de datos.
                                        Este método puede ser ineficiente en comparación con otros métodos de E/S más avanzados, como la DMA (Acceso Directo a Memoria), ya que requiere que el procesador esté disponible y esperando a que el dispositivo de E/S complete su operación antes de que pueda continuar con otras tareas. Además, el procesador puede estar ocupado con tareas de E/S mientras podría estar realizando otros cálculos o procesos en paralelo.
                                        Sin embargo, la E/S programada sigue siendo utilizada en sistemas de computadora simples o en dispositivos integrados donde la complejidad de la E/S no justifica la adopción de métodos más avanzados.
                                    </p>
                                </div>
                                <div id="ACCDIRMEM">
                                    <h3>Acceso directo a memoria</h3>
                                    <p class="content">El Acceso Directo a Memoria (DMA, por sus siglas en inglés) es una técnica de entrada/salida en la que un dispositivo de E/S puede acceder directamente a la memoria principal del sistema, sin la intervención del procesador. En lugar de requerir que el procesador realice la transferencia de datos entre el dispositivo de E/S y la memoria, el DMA permite que el dispositivo de E/S acceda directamente a la memoria principal y realice la transferencia de datos sin interferir en las operaciones del procesador.
                                        La DMA se utiliza comúnmente en dispositivos de alta velocidad, como tarjetas de red, tarjetas gráficas y controladores de almacenamiento, que necesitan transferir grandes cantidades de datos en poco tiempo. La técnica de DMA puede mejorar significativamente el rendimiento del sistema, ya que permite que el procesador se concentre en otras tareas mientras el dispositivo de E/S se encarga de la transferencia de datos.
                                        En resumen, el DMA permite que los dispositivos de E/S realicen transferencias de datos más eficientes y rápidas al acceder directamente a la memoria principal del sistema, lo que reduce la carga en el procesador y mejora el rendimiento del sistema.
                                    </p>
                                </div>
                                <div id="CANPRES">
                                    <h3>Canales y procesadores de entrada/salida</h3>
                                    <p class="content">Los canales y procesadores de entrada/salida son componentes importantes de los sistemas de E/S avanzados que permiten la transferencia eficiente de datos entre los dispositivos de E/S y la memoria principal del sistema.
                                        Un canal de E/S es un controlador de hardware dedicado que se encarga de la transferencia de datos entre los dispositivos de E/S y la memoria principal del sistema. El canal de E/S puede funcionar en modo DMA (Acceso Directo a Memoria) o en modo programado, y puede manejar múltiples dispositivos de E/S de forma simultánea. Los canales de E/S son comúnmente utilizados en sistemas de alta velocidad, como servidores y supercomputadoras, donde la transferencia de datos es crítica y el procesamiento de E/S a través del procesador principal puede afectar el rendimiento del sistema.
                                        Un procesador de E/S, por otro lado, es un microprocesador dedicado que se encarga de la gestión de múltiples canales de E/S y dispositivos de E/S. El procesador de E/S tiene una arquitectura propia y es capaz de realizar operaciones de E/S de manera independiente del procesador principal. Esto permite que el procesador de E/S se encargue de la transferencia de datos y la gestión de dispositivos de E/S, lo que libera al procesador principal para concentrarse en otras tareas y mejora el rendimiento del sistema.
                                        En resumen, los canales y procesadores de E/S son componentes críticos en los sistemas de computación avanzados que permiten la transferencia eficiente de datos entre los dispositivos de E/S y la memoria principal. Estos componentes ayudan a mejorar el rendimiento del sistema y a reducir la carga del procesador principal al manejar la gestión y transferencia de datos de E/S de manera independiente.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="tab-buses">
                            <h3>Buses</h3>
                            <div id="tab-buses-inner">
                                <ul class="index blue">
                                    <li><a href="#tipBuses">Tipos de buses</a></li>
                                    <li><a href="#estBuses">Estructura de los buses</a></li>
                                    <li><a href="#jerarBus">Jerarquia de buses</a></li>
                                </ul>
                                <div id="tipBuses">
                                    <h3>Tipos de buses</h3>
                                    <p class="content">Un bus es un conjunto de cables, líneas de control y protocolos que conectan los diferentes componentes de un sistema informático para permitir la transferencia de datos entre ellos. Los buses son un componente esencial de la arquitectura de computadoras y se utilizan para conectar la CPU, la memoria, los dispositivos de E/S y otros componentes del sistema.
                                        <br>Existen diferentes tipos de buses en la arquitectura de computadoras, algunos de los más comunes son:
                                    </p>
                                    <ul class="listContent">
                                        <li><b>Bus de datos:</b> Es un conjunto de líneas que transportan los datos entre la CPU y la memoria. El ancho del bus de datos determina la cantidad de datos que se pueden transferir a la vez. Por ejemplo, un bus de datos de 64 bits puede transferir 8 bytes de datos a la vez.</li>
                                        <li><b>Bus de direcciones:</b> Es un conjunto de líneas que transportan las direcciones de memoria desde la CPU hasta la memoria. El ancho del bus de direcciones determina la cantidad de memoria que se puede direccionar. Por ejemplo, un bus de direcciones de 32 bits puede direccionar hasta 4 GB de memoria.</li>
                                        <li><b>Bus de control:</b> Es un conjunto de líneas que transportan señales de control entre la CPU y otros componentes del sistema, como dispositivos de E/S. Las señales de control incluyen señales de lectura y escritura, señales de interrupción, señales de sincronización y señales de control de bus.</li>
                                        <li><b>Bus de E/S:</b> Es un conjunto de líneas que se utiliza para conectar los dispositivos de E/S a la CPU. El bus de E/S puede estar compuesto por varios buses diferentes, como el bus de datos, el bus de direcciones y el bus de control.</li>
                                    </ul>
                                    <div class="doubleImg">
                                        <div class="imgWithText">
                                            <img src="media/imgs/busFisico.jpg" alt="" class="contentImgs">
                                            <p class="content">Cable de bus</p>
                                        </div>
                                        <div class="imgWithText">
                                            <img src="media/imgs/busIntegrado.jpg" alt="" class="contentImgs">
                                            <p class="content">Bus en una tarjeta madre</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="estBuses">
                                    <h3>Estructura de los buses</h3>
                                    <p class="content">La estructura de los buses en una arquitectura de computadoras puede variar según el diseño del sistema, pero generalmente consta de tres partes: la señalización, la transferencia de datos y el protocolo.
                                        La señalización se refiere a cómo se transmiten las señales eléctricas a través del bus. Los buses pueden usar diferentes tipos de señalización, como señales unidireccionales, bidireccionales, serie, paralelas, entre otras.
                                        La transferencia de datos se refiere a cómo se transfieren los datos a través del bus. Los buses pueden transferir datos de forma síncrona o asíncrona. En una transferencia síncrona, los datos se transfieren en intervalos regulares de tiempo, mientras que en una transferencia asíncrona, los datos se transfieren cuando el dispositivo receptor está listo para recibirlos.
                                        El protocolo se refiere a las reglas que rigen cómo se lleva a cabo la comunicación a través del bus. El protocolo define cómo se realizan las transferencias de datos, cómo se gestionan las colisiones de datos y cómo se manejan las solicitudes de interrupción.
                                        La combinación de estas tres partes define la estructura del bus y determina cómo se comunican los componentes de la computadora. Los buses pueden ser diseñados para ser compartidos por varios dispositivos o pueden ser dedicados a un dispositivo específico. También pueden ser de diferentes anchos, velocidad y capacidad de transferencia de datos.
                                    </p>
                                </div>
                                <div id="jerarBus">
                                    <h3>Jerarquia de buses</h3>
                                    <p class="content">La jerarquía de buses se refiere a la organización y relación de los buses en un sistema informático. Hay varios niveles o capas de buses en un sistema, que se organizan en una jerarquía en función de su velocidad y capacidad de transferencia de datos.
                                        <br>Los niveles de la jerarquía de buses son los siguientes:
                                    </p>
                                    <ul class="listContent">
                                        <li><b>Bus interno de la CPU:</b> es el bus más rápido y se utiliza para la comunicación entre las distintas unidades de la CPU, como la unidad de control, la unidad aritmético-lógica y la memoria caché.</li>
                                        <li><b>Bus de sistema:</b> es el bus principal que conecta la CPU con la memoria principal y los dispositivos de E/S. También se conoce como el bus frontal.</li>
                                        <li><b>Bus de E/S:</b> es un bus secundario que se utiliza para la comunicación entre la CPU y los dispositivos de E/S.</li>
                                        <li><b>Buses periféricos:</b> son buses que se utilizan para conectar dispositivos periféricos, como impresoras, discos duros externos, cámaras, etc. Estos buses pueden ser de diferentes tipos, como USB, FireWire, SATA, etc.</li>
                                    </ul>
                                </div>
                             </div>
                        </div>
                        <div id="tab-interrupciones">
                            <h3>Interrupciones</h3>
                            <p class="content">En arquitectura de computadoras, una interrupción es una señal que indica a la CPU que detenga temporalmente la ejecución de un programa y atienda una tarea de mayor prioridad. Las interrupciones son una forma importante de manejar la entrada y salida de datos, así como de manejar eventos en tiempo real.
                                Cuando se produce una interrupción, la CPU detiene temporalmente la ejecución del programa actual y guarda su estado actual en la pila. A continuación, la CPU salta a una rutina de servicio de interrupción (ISR, por sus siglas en inglés) que se encarga de atender la tarea de mayor prioridad. Después de completar la tarea, la CPU vuelve a la tarea que estaba realizando anteriormente, restaurando su estado a partir de la pila.
                                Las interrupciones pueden ser generadas por dispositivos de E/S, como teclados, ratones y controladores de disco, para indicar que se ha completado una operación. También pueden ser generadas por la CPU para realizar tareas de mantenimiento, como el ajuste de relojes y la gestión de errores.
                                Las interrupciones se clasifican en dos tipos: interrupciones de software y de hardware. Las interrupciones de software son generadas por el propio programa que se está ejecutando, mientras que las interrupciones de hardware son generadas por dispositivos externos.
                                En resumen, las interrupciones son una forma importante de manejar la entrada y salida de datos, así como de manejar eventos en tiempo real en arquitectura de computadoras. Permiten a la CPU realizar múltiples tareas de manera eficiente y manejar dispositivos de E/S de manera efectiva.
                            </p>
                        </div>
                    </div>
                </div>
            </div>`
)


$("#unidad2").html(
    `
        <p><span class="temario" id="changeUnidad2">&nbsp;</span></p>
        <h2>Estructura y funcionamiento de la CPU</h2>
        <div id="unidad2-tabs">
            <ul class="mainIndex">
                <li><a href="#organizacionProce">Organizacion del procesador</a></li>
                <li><a href="#estructuraReg">Estructura de registros</a></li>
                <li><a href="#cicloinstruccion">El ciclo de instruccion</a></li>
                <li><a href="#sentToCpu">Casos de estudio de CPU</a></li>
            </ul>
            <div id="organizacionProce">
                    <h3>Organizacion del procesador</h3>
                    <p class="content">La organización del procesador se refiere a cómo está estructurado el procesador de una computadora. Está compuesto por una unidad de control (CU) y una unidad aritmético-lógica (ALU), que se encargan de controlar el flujo de datos y realizar operaciones aritméticas y lógicas, respectivamente. Además, el procesador puede tener otras unidades especializadas como una unidad de coma flotante (FPU) o una unidad de entrada/salida (IOU).
                        En cuanto a la arquitectura de computadoras, existen varias arquitecturas de procesador comunes, incluyendo la arquitectura de conjunto de instrucciones reducido (RISC), la arquitectura de conjunto de instrucciones complejas (CISC) y la arquitectura de procesador superescalar. La arquitectura RISC se enfoca en la simplicidad y la eficiencia en la ejecución de instrucciones, mientras que la arquitectura CISC se enfoca en la facilidad de programación. La arquitectura superescalar permite que el procesador pueda ejecutar múltiples instrucciones simultáneamente y mejorar el rendimiento del sistema.
                    </p>
                    <div class="imgWithText">
                        <img src="media/imgs/organizacionCpu.png" alt="" class="contentImgs">
                        <p class="content">Diagrama de la organizacion de un cpu</p>
                    </div>
                </div>
                <div id="estructuraReg">
                    <h3>Estructura de registros</h3>
                    <p class="content">La estructura de registros se refiere a la cantidad y el propósito de los registros utilizados en un procesador. Los registros son una forma de almacenamiento de datos de alta velocidad en la CPU de una computadora que se utilizan para almacenar datos temporalmente mientras se están procesando. Los registros pueden ser de propósito general (GPR) o de propósito específico (SPR), y pueden ser de usuario o de sistema. La cantidad y propósito de los registros varía según la arquitectura de procesador utilizada.</p>
                    <div id="tab-estructuraReg">
                        <ul class="bigger index red">
                            <li><a href="#regvis">Registros visibles para el usuario</a></li>
                            <li><a href="#regContr">Registros de control y estados</a></li>
                            <li><a href="#ejempreg">Ejemplos de organizacion de registro de CPU reales</a></li>
                        </ul>
                        <div id="regvis">
                            <h3>Registros visibles para el usuario</h3>
                            <p class="content">
                                Los registros visibles para el usuario son un conjunto de registros que pueden ser utilizados por un programa de usuario en un procesador. Estos registros son accesibles y utilizados directamente por los programas que se ejecutan en la CPU.
                                El conjunto de registros visibles para el usuario varía según la arquitectura del procesador. Por ejemplo, en la arquitectura x86, los registros visibles para el usuario incluyen los registros de propósito general como EAX, EBX, ECX, EDX, EBP, ESP, ESI y EDI. Estos registros se utilizan para almacenar operandos y resultados de operaciones aritméticas y lógicas.
                                Además de los registros de propósito general, algunas arquitecturas también tienen registros visibles para el usuario que se utilizan para otras tareas. Por ejemplo, la arquitectura x86 tiene registros de segmento que se utilizan para apuntar a diferentes partes de la memoria, como la pila o el código.
                                El conjunto de registros visibles para el usuario también puede ser ampliado por medio de extensiones de arquitectura o modos de operación. Por ejemplo, en la arquitectura x86, el modo de operación protegido amplía el conjunto de registros visibles para el usuario con registros adicionales.
                            </p>
                        </div>
                        <div id="regContr">
                            <h3>Registros de control y estados</h3>
                            <p class="content">
                                Los registros de control y estados son un conjunto de registros utilizados por la unidad de control de la CPU para controlar y monitorear el funcionamiento del procesador. Estos registros no son visibles para el usuario y solo son utilizados por el hardware del sistema y el sistema operativo.
                                <br> Algunos ejemplos de registros de control y estados son:
                            </p>
                            <ul class="listContent">
                                <li><b>El registro de estado de flags (FLAGS) en la arquitectura x86:</b> contiene banderas que indican si se ha producido una condición aritmética, como la bandera de carry o la bandera de signo.</li>
                                <li><b>El registro de estado del procesador (PSW) en la arquitectura IBM System/370:</b> contiene información sobre el modo de operación actual, el estado de interrupción y otros indicadores de estado.</li>
                                <li><b>El registro de contador de programa (PC):</b> contiene la dirección de la siguiente instrucción a ejecutar.</li>
                                <li><b>El registro de puntero de pila (SP):</b> apunta a la posición actual de la pila.</li>
                            </ul>
                            <div class="doubleImg">
                                <div class="imgWithText"><img src="media/imgs/flags.jpg" alt="" class="contentImgs"><p class="content">Registro FLAGS</p></div>
                                <div class="imgWithText"><img src="media/imgs/psw.png" alt="" class="contentImgs"><p class="content">Registro PSW</p></div>
                                <div class="imgWithText"><img src="media/imgs/controladorPrograma.png" alt="" class="contentImgs"><p class="content">Registro PC</p></div>
                                <div class="imgWithText"><img src="media/imgs/pila.png" alt="" class="contentImgs"><p class="content">Registro SP</p></div>
                            </div>
                        </div>
                        <div id="ejempreg">
                            <h3>Ejemplos de organizacion de registro de CPU reales</h3>
                            <ul class="listContent">
                                <li><b>Intel x86:</b> La arquitectura x86 de Intel tiene una organización de registros basada en acumuladores y registros de propósito general. Los registros de acumuladores son EAX, EBX, ECX y EDX, y se utilizan para operaciones aritméticas y lógicas. Los registros de propósito general incluyen EBP, ESP, ESI y EDI, que se utilizan para la gestión de la pila y la transferencia de datos.</li>
                                <li><b>ARM:</b> La arquitectura ARM tiene una organización de registros de 32 bits y una estructura de banco de registros. El banco de registros incluye 16 registros de propósito general, 1 registro de estado de programa y varios registros especiales para interrupciones y manejo de excepciones.</li>
                                <li><b>MIPS:</b> La arquitectura MIPS tiene una organización de registros de 32 bits y utiliza una combinación de registros de propósito general y registros de coprocesador. Los registros de propósito general se dividen en 32 registros de 32 bits y se utilizan para operaciones aritméticas y lógicas. Los registros de coprocesador se utilizan para la comunicación entre la CPU y la unidad de coma flotante.</li>
                                <li><b>IBM z/Architecture:</b> La arquitectura z/Architecture de IBM tiene una organización de registros de 64 bits y utiliza un conjunto de registros de propósito general y registros de control y estado. Los registros de propósito general se utilizan para operaciones aritméticas y lógicas, mientras que los registros de control y estado se utilizan para el manejo de excepciones y el control de la CPU.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="cicloinstruccion">
                    <h3>Ciclo de instrucciones</h3>
                    <p class="content">El ciclo de instrucciones es el proceso que sigue la CPU para ejecutar las instrucciones que le son enviadas. Este proceso se divide en varias etapas, que incluyen buscar la instrucción, decodificarla, ejecutarla y almacenar los resultados. <br>
                        El ciclo de instrucciones comienza cuando se carga la instrucción desde la memoria en el registro de instrucción de la CPU. A continuación, se decodifica la instrucción para identificar la operación que se debe realizar y los operandos necesarios.
                        Luego, se ejecuta la operación, que puede implicar la transferencia de datos entre registros, la realización de operaciones aritméticas o lógicas, o la realización de operaciones de entrada/salida. Una vez completada la operación, los resultados se almacenan en un registro o en la memoria. <br>
                        Después de completar una instrucción, la CPU vuelve a la etapa de búsqueda y carga la siguiente instrucción. Este proceso se repite hasta que se completa el programa o se produce una interrupción. El ciclo de instrucciones es fundamental para el funcionamiento de la CPU y es uno de los principales factores que determinan su rendimiento.
                    </p>
                    <div id="tab-cicloInstruccion">
                        <ul class="index red">
                            <li><a href="#f-d-e">Ciclo fetch-decode-execute</a></li>
                            <li><a href="#segmIns">Segmentacion de instrucciones</a></li>
                            <li><a href="#conjIns">Conjunto de instrucciones</a></li>
                            <li><a href="#modDirForm">Modos de direccionamiento y formatos</a></li>
                        </ul>
                        <div id="f-d-e">
                            <h3>Ciclo Fetch-Decode-Execute</h3>
                            <p class="content">
                                El ciclo fetch-decode-execute es un proceso que describe cómo una CPU ejecuta las instrucciones almacenadas en la memoria. El proceso comienza con la etapa de "fetch", en la que la CPU busca la próxima instrucción en la memoria y la carga en un registro interno. Luego, en la etapa "decode", la CPU decodifica la instrucción y determina qué operación se debe realizar. Finalmente, en la etapa "execute", la CPU lleva a cabo la operación y actualiza los registros y la memoria según sea necesario. Este ciclo se repite continuamente mientras la CPU está en funcionamiento, lo que permite la ejecución de programas y la realización de tareas complejas.
                            </p>
                            <img src="media/imgs/fetchdecode.webp" alt="" class="contentImgs">
                        </div>
                        <div id="segmIns">
                            <h3>Segmentacion de instrucciones</h3>
                            <p class="content">
                                La segmentación de instrucciones es una técnica utilizada en arquitecturas de computadoras para mejorar el rendimiento de la CPU al permitir que varias instrucciones se ejecuten simultáneamente. Esta técnica divide el proceso de ejecución de instrucciones en diferentes etapas, donde cada etapa se ejecuta en un ciclo de reloj separado. Las etapas comunes incluyen la búsqueda de instrucciones, la decodificación de instrucciones, la ejecución de instrucciones y el acceso a memoria.
                                La segmentación de instrucciones permite que varias instrucciones se ejecuten simultáneamente, lo que reduce el tiempo total de ejecución del programa. Además, también permite que se puedan reordenar y ejecutar instrucciones de manera más eficiente, lo que a su vez puede mejorar aún más el rendimiento de la CPU.
                                Sin embargo, la segmentación de instrucciones también puede presentar algunos desafíos, como la dependencia de datos y el control de flujo, que pueden retrasar la ejecución de instrucciones y reducir el rendimiento. Además, la segmentación también puede aumentar la complejidad del diseño de la CPU y el consumo de energía.
                            </p>
                        </div>
                        <div id="conjIns">
                            <h3>Conjunto de instrucciones: Caracteristicas y funciones</h3>
                            <p class="content">
                                El conjunto de instrucciones de una arquitectura de computadoras es el conjunto de operaciones que la CPU puede ejecutar. Cada conjunto de instrucciones es único y varía de una arquitectura a otra.
                                Las características y funciones del conjunto de instrucciones pueden variar significativamente según la arquitectura. <br> Sin embargo, en general, las funciones del conjunto de instrucciones pueden incluir:
                            </p>
                            <ul class="listContent">
                                <li><b>Operaciones aritméticas:</b> como sumar, restar, multiplicar y dividir números.</li>
                                <li><b>Operaciones lógicas:</b> como comparar dos valores, probar si un bit está establecido o borrar un bit.</li>
                                <li><b>Operaciones de transferencia de datos:</b> como mover datos de una ubicación a otra, copiar datos de un lugar a otro o intercambiar valores entre registros.</li>
                                <li><b>Operaciones de control de flujo:</b> como saltar a una dirección de memoria específica, llamar a una subrutina o volver de una subrutina.</li>
                            </ul>
                            <p class="content">Además de estas funciones básicas, los conjuntos de instrucciones pueden incluir características adicionales, como:</p>
                            <ul class="listContent">
                                <li><b>Operaciones de coma flotante:</b> para realizar cálculos de precisión decimal.</li>
                                <li><b>Instrucciones SIMD (Single Instruction, Multiple Data):</b> para procesar múltiples elementos de datos a la vez.</li>
                                <li><b>Instrucciones de gestión de memoria:</b> para leer o escribir en la memoria del sistema.</li>
                                <li><b>Instrucciones de manejo de excepciones:</b> para detectar y manejar errores o eventos inesperados.</li>
                            </ul>
                        </div>
                        <div id="modDirForm">
                            <h3>Modos de direccionamiento y formatos</h3>
                            <p class="content">
                                Los modos de direccionamiento se refieren a la forma en que se especifica la dirección de memoria para acceder a los datos o instrucciones en una arquitectura de CPU. Los formatos de instrucción se refieren a la forma en que se codifican las instrucciones para que la CPU las pueda interpretar y ejecutar. <br> 
                                <br>Algunos modos de direccionamiento y formatos comunes:
                                <b>Modos de direccionamiento:</b>
                            </p>
                            <ul class="listContent">
                              <li><b>Direccionamiento inmediato:</b> la dirección del operando se especifica en la propia instrucción.</li>
                              <li><b>Direccionamiento directo:</b> la dirección del operando se especifica directamente en la instrucción.</li>
                              <li><b>Direccionamiento indirecto:</b> la dirección del operando se almacena en un registro o memoria, y se accede a ella mediante el registro o memoria.</li>
                              <li><b>Direccionamiento indexado:</b> la dirección del operando se calcula sumando un desplazamiento a un registro o valor de memoria.</li>
                              <li><b>Direccionamiento de registro:</b> el operando se encuentra en un registro específico.</li>
                              <li><b>Direccionamiento relativo:</b> la dirección del operando se especifica como un desplazamiento relativo a la dirección actual de la instrucción.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="sentToCpu">
                     <a href="https://nexwan.github.io/cpus-page/">Hazme click para ver informacion de los procesadores</a>
                </div>
        </div>
    `
)

$("#unidad3").html(
    `
                <p><span class="temario" id="changeUnidad3">&nbsp;</span></p>
                <h2>Seleccion de computadoras para ensamble de equipo de computo</h2>
                <div id="unidad3-tabs">
                    <ul class="mainIndex">
                        <li><a href="#chipSet">Chip Set</a></li>
                        <li><a href="#aplicaciones">Aplicaciones</a></li>
                        <li><a href="#ambientesServicios">Ambientes de servicio</a></li>
                    </ul>
                    <div id="chipSet">
                        <h3>Chipset</h3>
                        <p class="content">
                                Un chipset, también conocido como conjunto de chips, es un conjunto de circuitos integrados diseñados para funcionar juntos como una unidad para realizar varias funciones en un dispositivo electrónico, como una computadora, un teléfono inteligente o una tablet. El chipset actúa como el cerebro del sistema, coordinando y controlando las operaciones de los diferentes componentes de hardware.
                                El chipset está compuesto por varios chips individuales que desempeñan funciones específicas y se conectan entre sí a través de buses de datos. Estos chips pueden incluir un chip de procesamiento central (CPU), un chip de procesamiento de gráficos (GPU), un chip de control de memoria, un chip de control de E/S (entrada/salida), un chip de control de audio, entre otros. Cada chip se encarga de gestionar una tarea particular y trabajar en conjunto para garantizar el funcionamiento adecuado del sistema.
                                El chipset juega un papel fundamental en el rendimiento y las capacidades de un dispositivo. Determina la compatibilidad con ciertos componentes, como tarjetas gráficas, módulos de memoria y dispositivos de almacenamiento. También influye en la velocidad de procesamiento, la calidad de los gráficos, el soporte de conectividad (como Wi-Fi y Bluetooth), los puertos de E/S disponibles y otras características específicas del dispositivo.
                                En resumen, un chipset es un conjunto de chips interconectados que funcionan juntos para controlar y gestionar las operaciones de un dispositivo electrónico. Es esencial para el rendimiento y la funcionalidad del dispositivo, ya que coordina y controla las funciones de los diferentes componentes de hardware.
                        </p>
                        <div id="chipsetTab">
                            <ul class="indexBigger red" id="bigIndex">
                                <li><a href="#CPU">Unidad central de procesamiento</a></li>
                                <li><a href="#ControlBus">Controlador del Bus</a></li>
                                <li><a href="#puertasES">Puertas de entrada salida e/s</a></li>
                                <li><a href="#controlInt">Controlador de interrupciones</a></li>
                                <li><a href="#controlADAM">Controlador de Acceso Directo a Memoria</a></li>
                                <li><a href="#circuitoTemp">Circuitos de temporizacion</a></li>
                                <li><a href="#circuitoControl">Circuitos de control</a></li>
                                <li><a href="#controlVideo">Controladores de video</a></li>
                            </ul>
                            <div id="CPU">
                                <p class="content">La CPU es uno de los componentes clave de una computadora o dispositivo electrónico y se considera el cerebro del sistema.
                                La CPU es responsable de ejecutar las instrucciones y realizar los cálculos necesarios para el funcionamiento del dispositivo. Es el componente encargado de procesar y realizar operaciones lógicas, aritméticas y de control. Actúa como el núcleo del sistema, supervisando y coordinando todas las tareas y operaciones del hardware y el software.
                                <br> La cpu cuenta de varias partes esenciales</p>
                                <ul class="listContent">
                                  <li><b>Unidad de Control (Control Unit):</b> Es responsable de la gestión y coordinación de todas las operaciones dentro de la CPU. Controla la secuencia de ejecución de las instrucciones y coordina la comunicación entre la memoria, la unidad de almacenamiento y otros dispositivos.</li>
                                  <li><b>Unidad Aritmético-Lógica (Arithmetic Logic Unit, ALU):</b> Realiza operaciones matemáticas y lógicas, como sumas, restas, multiplicaciones, comparaciones y operaciones booleanas. Es donde se llevan a cabo los cálculos y las operaciones básicas.</li>
                                  <li><b>Registros:</b> Son pequeñas unidades de almacenamiento de alta velocidad que almacenan datos temporales y resultados intermedios durante la ejecución de las instrucciones. Los registros son fundamentales para el rendimiento de la CPU, ya que permiten un acceso rápido a los datos necesarios para las operaciones.</li>
                                </ul>
                                <img src="media/imgs/cpu.webp" alt="" class="contentImgs">
                                <p class="content">
                                La CPU interactúa con otros componentes del sistema, como la memoria RAM, los dispositivos de almacenamiento, los periféricos y otros, para realizar las tareas solicitadas por el usuario. Es responsable de la ejecución de programas, el manejo de instrucciones, la gestión de la memoria y el control de los dispositivos de entrada y salida.
                                </p>
                            </div>
                            <div id="ControlBus">
                                <p class="content">
                                El controlador del bus, también conocido como controlador de bus de sistema, es un componente clave en una computadora que se encarga de coordinar y controlar el flujo de datos entre los diferentes dispositivos conectados al bus del sistema.
                                El bus del sistema es una estructura de comunicación interna que permite la transferencia de datos, direcciones y señales de control entre la CPU, la memoria y otros componentes del sistema, como tarjetas de expansión y dispositivos de almacenamiento.
                                El controlador del bus actúa como un intermediario entre la CPU y los dispositivos conectados al bus del sistema
                                </p>
                                <img src="media/imgs/controladorBus.jpg" alt="" class="contentImgs">
                            </div>
                            <div id="puertasES">
                                <p class="content">Las puertas de entrada/salida (I/O, por sus siglas en inglés) se refieren a los circuitos electrónicos que permiten la comunicación y transferencia de datos entre un sistema informático y los dispositivos periféricos conectados a él. Estas puertas actúan como interfaz entre el sistema y el mundo exterior, permitiendo la entrada y salida de datos, así como el control de dispositivos externos.
                                Las puertas de entrada/salida se utilizan para conectar y controlar una amplia variedad de dispositivos periféricos, como teclados, ratones, monitores, impresoras, unidades de almacenamiento externas, tarjetas de red, dispositivos USB, entre otros. Proporcionan los medios para enviar y recibir datos, señales de control y alimentación eléctrica hacia y desde estos dispositivos.
                                Existen diferentes tipos de puertas de entrada/salida, que pueden variar según el tipo de interfaz y la tecnología utilizada.
                                <br> Algunos ejemplos son: </p>
                                <ul class="listContent">
                                  <li><b>Puertos seriales:</b> Proporcionan una interfaz de comunicación serial, donde los datos se transmiten uno a uno en secuencia. Ejemplos comunes incluyen puertos RS-232 y puertos USB.</li>
                                  <li><b>Puertos paralelos:</b> Permiten la transmisión simultánea de múltiples bits de datos a través de varios cables. El puerto paralelo más conocido es el puerto de impresora (LPT), que se utiliza para conectar impresoras y otros dispositivos paralelos.</li>
                                  <li><b>Interfaces de red:</b> Permiten la conexión y comunicación con redes de área local (LAN) o redes de área amplia (WAN). Ejemplos comunes incluyen puertos Ethernet y puertos inalámbricos.</li>
                                  <li><b>Puertos de audio y video:</b> Se utilizan para conectar altavoces, micrófonos, auriculares, monitores, televisores y otros dispositivos de audio y video. Ejemplos comunes son los puertos de audio de 3,5 mm, los puertos HDMI y los puertos DisplayPort.</li>
                                </ul>
                                <div class="imgWithText">
                                    <img src="media/imgs/entradasalida.jpg" alt="" class="contentImgs">
                                    <p class="content">Puertas de entrada/salida en una mb</p>
                                </div>
                                <p class="content">
                                Además de proporcionar conexiones físicas, las puertas de entrada/salida también implican controladores y software específicos para gestionar la comunicación y las operaciones con los dispositivos periféricos. Estos controladores permiten la detección, configuración y manejo adecuado de los dispositivos conectados, asegurando una interacción fluida entre el sistema y los periféricos.
                                </p>
                            </div>
                            <div id="controlInt">
                                <p class="content">
                                El controlador de interrupciones es un componente del hardware de una computadora o sistema informático que se encarga de gestionar y controlar las interrupciones generadas por los dispositivos periféricos o por eventos específicos del sistema.
                                Una interrupción es una señal enviada por un dispositivo o evento que requiere atención inmediata por parte del sistema. Puede ocurrir cuando un dispositivo periférico necesita enviar o recibir datos, cuando se produce un error en el hardware, cuando se solicita una operación específica, entre otras situaciones. Cuando se genera una interrupción, el controlador de interrupciones se activa y toma el control del procesador central (CPU) para atender la solicitud o evento que la generó.
                                La función principal del controlador de interrupciones es gestionar y priorizar las interrupciones según su nivel de prioridad. Cada interrupción se asigna a un nivel de prioridad específico, y el controlador de interrupciones se encarga de determinar cuál debe ser atendida en primer lugar. Esto se hace mediante un esquema de prioridad establecido por el sistema, donde las interrupciones más críticas o urgentes se atienden antes que las de menor prioridad.<br>
                                Cuando se recibe una interrupción, el controlador de interrupciones puede llevar a cabo las siguientes acciones:
                                </p>
                                <ul class="listContent">
                                 <li><b>Identificación:</b> El controlador de interrupciones identifica la fuente de la interrupción, es decir, qué dispositivo o evento la generó. Cada dispositivo periférico está asociado a un número o identificador de interrupción único.</li>
                                  <li><b>Enmascaramiento:</b> El controlador de interrupciones puede tener la capacidad de enmascarar o habilitar/deshabilitar determinadas interrupciones. Esto permite controlar qué dispositivos periféricos pueden generar interrupciones y cuáles están temporalmente desactivados.</li>
                                  <li><b>Priorización:</b> El controlador de interrupciones establece la prioridad de las interrupciones y decide cuál será atendida primero según su nivel de importancia.</li>
                                  <li><b>Gestión de rutinas de interrupción:</b> Una vez que se ha identificado y priorizado una interrupción, el controlador de interrupciones puede ejecutar una rutina de interrupción específica asociada a esa interrupción en particular. Esta rutina maneja la acción requerida para atender la solicitud del dispositivo o evento que generó la interrupción.</li>
                                </ul>
                            </div>
                            <div id="controlADAM">
                            <p class="content">
                                El control de acceso directo a memoria (Direct Memory Access, DMA) es una técnica utilizada en sistemas informáticos para permitir que ciertos dispositivos periféricos accedan a la memoria del sistema de forma directa, sin necesidad de la intervención de la CPU.
                                Cuando un dispositivo periférico necesita transferir datos hacia o desde la memoria del sistema, normalmente se requiere la participación de la CPU para coordinar y llevar a cabo la transferencia. Sin embargo, en situaciones en las que se requiere una alta velocidad de transferencia de datos o una descarga de la carga de trabajo de la CPU, se utiliza el control de acceso directo a memoria.
                                El DMA permite que el dispositivo periférico tome el control temporal de la comunicación con la memoria y realice la transferencia directamente. La CPU configura el DMA proporcionando información sobre la ubicación de los datos en la memoria y el tamaño de la transferencia. Luego, el dispositivo periférico accede a la memoria directamente a través del bus del sistema, transfiere los datos y finaliza la operación.
                                <br> El control de acceso directo a memoria ofrece varias ventajas, incluyendo:
                            </p>
                            <ul class="listContent">
                                 <li><b>Mejor rendimiento:</b> Al permitir que los dispositivos periféricos accedan directamente a la memoria, se reduce la carga de trabajo de la CPU y se mejora el rendimiento general del sistema. Esto es especialmente útil en transferencias de datos grandes y rápidas, como las realizadas por tarjetas de red de alta velocidad o controladoras de disco.</li>
                                  <li><b>Menor latencia:</b> Al eliminar la necesidad de que la CPU participe en cada transferencia de datos, se reduce la latencia en el procesamiento de las operaciones de entrada/salida. Esto resulta en una comunicación más rápida y eficiente entre los dispositivos periféricos y la memoria.</li>
                                  <li><b>Mayor flexibilidad:</b> El control de acceso directo a memoria permite que los dispositivos periféricos realicen transferencias de datos en segundo plano mientras la CPU se ocupa de otras tareas. Esto permite una mayor flexibilidad en el uso de los recursos del sistema y facilita la ejecución simultánea de múltiples operaciones.</li>
                            </ul>
                            <p class="content">A pesar de sus beneficios, el control de acceso directo a memoria debe ser utilizado con precaución, ya que los dispositivos periféricos pueden acceder a la memoria sin la supervisión directa de la CPU. Es importante garantizar que se implementen mecanismos de seguridad adecuados para proteger la integridad de los datos y prevenir accesos no autorizados a la memoria del sistema.</p>
                            </div>
                            <div id="circuitoTemp">
                                <p class="content">
                                    Los circuitos de temporización, también conocidos como circuitos temporizadores o circuitos de reloj, son componentes electrónicos que generan señales de temporización para controlar el tiempo en diversos dispositivos y sistemas.
                                    Estos circuitos están diseñados para producir señales de salida con una duración o frecuencia específica, que se utilizan para sincronizar y coordinar diferentes partes de un sistema electrónico. Pueden ser utilizados en una amplia gama de aplicaciones, desde sistemas de control automatizados hasta dispositivos de medición y comunicaciones.<br>
                                    Existen diferentes tipos de circuitos de temporización, algunos de los más comunes son:
                                </p>
                                <ul class="listContent">
                                    <li><b>Osciladores:</b> Son circuitos que generan una señal periódica continua, como una onda sinusoidal, cuadrada o de pulso. Estas señales se utilizan para marcar el ritmo del sistema y pueden ajustarse para producir diferentes frecuencias.</li>
                                  <li><b>Contadores:</b> Son circuitos que generan una secuencia de pulsos o señales de salida en función de un contador interno. Estos circuitos pueden contar impulsos de reloj o ciclos de señal para generar salidas sincronizadas.</li>
                                  <li><b>Temporizadores:</b> Son circuitos que generan una señal de salida con una duración específica o que producen una señal de salida después de un período de tiempo determinado. Se utilizan en aplicaciones que requieren retrasos o intervalos de tiempo precisos.</li>
                                  <li><b>Divisores de frecuencia:</b> Son circuitos que dividen la frecuencia de la señal de entrada en una frecuencia más baja. Estos circuitos se utilizan para obtener frecuencias de salida más bajas en relación con una señal de entrada y se pueden combinar con otros componentes para lograr una temporización precisa.</li>
                                </ul>
                            </div>
                            <div id="circuitoControl">
                                <p class="content">
                                    Un circuito de control es un componente o conjunto de componentes electrónicos diseñados para regular y supervisar el funcionamiento de un sistema o dispositivo. Su función principal es recibir señales de entrada, procesarlas y generar las señales de salida necesarias para controlar diferentes aspectos del sistema.
                                    Los circuitos de control se utilizan en una amplia variedad de aplicaciones, desde sistemas automatizados hasta dispositivos electrónicos de uso cotidiano. Algunos ejemplos comunes de circuitos de control incluyen controladores de temperatura, controladores de velocidad de motores, controladores de iluminación y controladores de sistemas de seguridad.
                                    Estos circuitos suelen incluir componentes como sensores, que detectan las condiciones del sistema, y actuadores, que realizan las acciones necesarias para controlar el sistema. También pueden incorporar circuitos de lógica, microcontroladores o circuitos integrados especializados para realizar el procesamiento y la toma de decisiones. <br>
                                    El funcionamiento de un circuito de control generalmente sigue el siguiente proceso:
                                </p>
                                <ol class="listContent">
                                     <li><b>Recepción de señales de entrada:</b> El circuito recibe información o señales de entrada provenientes de sensores u otros dispositivos. Estas señales representan las condiciones actuales del sistema que se está controlando.</li>
                                      <li><b>Procesamiento de la información:</b> Las señales de entrada son procesadas por el circuito de control, donde se aplican algoritmos, lógica o cálculos para determinar las acciones requeridas.</li>
                                      <li><b>Generación de señales de salida:</b> Basado en el procesamiento de las señales de entrada, el circuito de control genera señales de salida adecuadas para controlar los actuadores del sistema. Estas señales de salida pueden ser voltajes, corrientes, señales digitales u otros tipos de señales dependiendo de los requerimientos del sistema.</li>
                                      <li><b>Control del sistema:</b> Las señales de salida son enviadas a los actuadores, que son responsables de realizar las acciones físicas necesarias para controlar el sistema. Estas acciones pueden incluir encender o apagar dispositivos, regular la velocidad o posición de un motor, ajustar la temperatura, entre otros.</li>
                                </ol>
                            </div>
                            <div id="controlVideo">
                                <p class="content">
                                    Los controladores de video, también conocidos como controladores de pantalla o controladores de gráficos, son componentes electrónicos o software que gestionan la generación y visualización de imágenes en un dispositivo de visualización, como un monitor, una pantalla de televisión o una pantalla integrada en un dispositivo móvil.
                                    Estos controladores son responsables de procesar la información gráfica generada por la CPU y convertirla en señales comprensibles para el dispositivo de visualización. <br>
                                    Sus funciones principales incluyen:
                                </p>
                                <ul class="listContent">
                                    <ul>
                                      <li><b>Interfaz con la CPU:</b> El controlador de video actúa como intermediario entre la CPU y el dispositivo de visualización. Recibe las instrucciones y datos gráficos de la CPU y los procesa para su representación en pantalla.</li>
                                      <li><b>Conversión de señales:</b> El controlador de video convierte las señales digitales generadas por la CPU en señales analógicas o digitales compatibles con el dispositivo de visualización. Esto implica la conversión de formatos de señal, la adaptación de la resolución y la frecuencia de actualización, entre otros parámetros.</li>
                                      <li><b>Renderizado de gráficos:</b> El controlador de video puede incluir capacidades de renderizado de gráficos, lo que implica la generación de imágenes a partir de instrucciones y datos proporcionados por la CPU. Esto puede incluir la manipulación de polígonos, texturas, iluminación y otros elementos para producir imágenes detalladas y realistas.</li>
                                      <li><b>Administración de memoria de video:</b> Los controladores de video suelen gestionar la memoria de video, que almacena los datos gráficos necesarios para la representación de las imágenes en pantalla. Esto incluye la asignación y liberación de memoria, así como la transferencia eficiente de datos entre la memoria de video y la memoria principal del sistema.</li>
                                      <li><b>Control de configuración:</b> Los controladores de video permiten ajustar diferentes parámetros de configuración relacionados con la visualización, como la resolución de pantalla, la relación de aspecto, la calibración del color, la frecuencia de actualización, entre otros. Estos ajustes se pueden realizar a través de configuraciones de software o mediante la configuración de hardware específica del controlador.</li>
                                </ul>
                                <div class="imgWithText">
                                    <img src="media/imgs/nvidiapanel.png" alt="" class="contentImgs">
                                    <p class="content">Panel de control de video de Nvidia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="aplicaciones">
                        <h3>Aplicaciones</h3>
                        <div id="tab-aplicaciones">
                            <ul class="index red">
                                <li><a href="#entrada/salida">Entrada/salida</a></li>
                                <li><a href="#almacenamiento">Almacenamiento</a></li>
                                <li><a href="#fuentesAlimentacion">Fuentes de alimentacion</a></li>
                            </ul>
                            <div id="entrada/salida">
                                <p class="content">
                                        Las aplicaciones de entrada/salida (E/S) son variadas y abarcan una amplia gama de dispositivos y sistemas.<br> Algunos de los  ejemplos mas comunes de aplicaciones de E/S son:
                                    </p>
                                    <ul class="listContent">
                                          <li>Dispositivos de entrada/salida de uso general: Incluyen teclados, ratones, escáneres, impresoras, cámaras digitales, micrófonos y altavoces. Estos dispositivos permiten la interacción del usuario con la computadora o sistema y la entrada y salida de información.</li>
                                          <li>Dispositivos de almacenamiento externo: Los dispositivos como unidades de disco duro externas, unidades de estado sólido (SSD), unidades flash USB y tarjetas de memoria son utilizados para el almacenamiento y transferencia de datos entre sistemas. Estos dispositivos permiten la entrada y salida de grandes volúmenes de datos.</li>
                                          <li>Dispositivos de red: Las tarjetas de red, adaptadores inalámbricos y módems son utilizados para la comunicación y conexión a redes locales (LAN) o redes de área amplia (WAN). Estos dispositivos permiten la entrada y salida de datos a través de redes, como la transferencia de archivos, navegación por Internet y comunicación en línea.</li>
                                          <li>Dispositivos de control industrial: En entornos industriales, los dispositivos de E/S se utilizan para controlar y monitorear procesos y sistemas. Estos dispositivos pueden incluir sensores, actuadores, controladores de temperatura, controladores de velocidad y otros dispositivos especializados para la entrada y salida de señales en sistemas de automatización y control.</li>
                                          <li>Dispositivos multimedia: Los dispositivos multimedia, como reproductores de DVD/Blu-ray, sistemas de sonido envolvente, televisores y proyectores, están diseñados para la entrada y salida de contenido multimedia, como películas, música y presentaciones.</li>
                                          <li>Dispositivos de entrada/salida en sistemas embebidos: En sistemas embebidos, como dispositivos móviles, automóviles, electrodomésticos inteligentes y dispositivos médicos, los dispositivos de E/S se utilizan para interactuar con el usuario y controlar diferentes funciones del sistema.</li>
                                          <li>Dispositivos de E/S especializados: También existen dispositivos de E/S especializados para aplicaciones específicas, como lectores de códigos de barras, sensores biométricos, dispositivos de realidad virtual y aumentada, dispositivos de captura de datos, entre otros.</li>
                                    </ul>
                            </div>
                            <div id="almacenamiento">
                                <p class="content">
                                    Los dispositivos de almacenamiento, como los HDD (discos duros), SSD (unidades de estado sólido) y la memoria flash, se utilizan en una amplia variedad de aplicaciones tecnológicas.
                                    En el caso de los HDD, se utilizan en computadoras personales, portátiles y servidores para almacenar grandes volúmenes de datos a un costo relativamente bajo. Son ideales para el almacenamiento a largo plazo de archivos y programas. Los HDD utilizan discos magnéticos que giran a alta velocidad y cabezas de lectura/escritura para acceder a los datos almacenados en ellos.
                                    Por otro lado, los SSD han ganado popularidad debido a su mayor rendimiento en comparación con los HDD. Utilizan memoria flash para almacenar datos de forma sólida, sin partes móviles. Esto los hace más rápidos, resistentes y eficientes energéticamente. Los SSD se utilizan en computadoras personales, portátiles, servidores y dispositivos móviles para mejorar la velocidad de arranque, carga de aplicaciones y transferencia de datos.
                                    La memoria flash es otro tipo de dispositivo de almacenamiento utilizado en una variedad de aplicaciones. Se encuentra en unidades USB, tarjetas de memoria, teléfonos móviles y otros dispositivos portátiles. La memoria flash es no volátil, lo que significa que puede retener datos incluso cuando no hay alimentación eléctrica. Es adecuada para almacenar y transportar datos de manera rápida y segura.
                                </p>
                                <div class="doubleImg">
                                    <div class="imgWithText"><img src="media/imgs/ssd.jpg" alt="" class="contentImgs"><p class="content">Disco de estado solido (SSD)</p></div>
                                    <div class="imgWithText"><img src="media/imgs/hdd.webp" alt="" class="contentImgs"><p class="content">Disco duro magnetico (HDD)</p></div>
                                </div>
                            </div>
                            <div id="fuentesAlimentacion">
                                <p class="content">
                                    Una fuente de alimentación es un dispositivo electrónico que convierte la corriente eléctrica de la red de suministro en voltajes y corrientes estables y adecuados para alimentar otros dispositivos electrónicos. Proporciona la energía necesaria para el funcionamiento de componentes y sistemas, asegurando un suministro constante y confiable de energía eléctrica.<br>
                                    Las fuentes de alimentación tienen una amplia variedad de aplicaciones en diversos campos tecnológicos y de electrónica. <br>Algunas de las aplicaciones comunes de las fuentes de alimentación son las siguientes:
                                </p>
                                <ul class="listContent">
                                      <li><b>Computadoras y servidores:</b> Las fuentes de alimentación se utilizan en computadoras de escritorio, portátiles y servidores para suministrar energía a todos los componentes internos. Proporcionan los voltajes necesarios para alimentar la placa base, los discos duros, las tarjetas de expansión, los ventiladores y otros periféricos.</li>
                                      <li><b>Electrónica de consumo:</b> Las fuentes de alimentación se utilizan en una amplia gama de dispositivos electrónicos de consumo, como televisores, reproductores de DVD/Blu-ray, consolas de juegos, sistemas de sonido y electrodomésticos. Estas fuentes de alimentación se encargan de convertir la corriente eléctrica de la toma de corriente en los voltajes adecuados para cada componente del dispositivo.</li>
                                      <li><b>Telecomunicaciones:</b> En el campo de las telecomunicaciones, las fuentes de alimentación se utilizan para suministrar energía a equipos de redes, como enrutadores, conmutadores, equipos de telefonía y estaciones base de comunicaciones móviles. Garantizan un suministro de energía constante y confiable para el funcionamiento adecuado de estos dispositivos.</li>
                                      <li><b>Sistemas de control industrial:</b> En entornos industriales, las fuentes de alimentación se utilizan en sistemas de control y automatización. Suministran energía a PLC (Controladores Lógicos Programables), motores, sensores, actuadores y otros componentes utilizados en la automatización de procesos industriales.</li>
                                      <li><b>Sistemas de energía renovable:</b> En sistemas de energía renovable, como paneles solares y turbinas eólicas, las fuentes de alimentación se utilizan para convertir la energía generada por estas fuentes renovables en una forma de corriente continua o alterna utilizable.</li>
                                      <li><b>Equipos médicos:</b> Las fuentes de alimentación también tienen aplicaciones en el campo médico, donde se utilizan en equipos y dispositivos médicos, como monitores de pacientes, equipos de diagnóstico, sistemas de resonancia magnética y equipos de terapia.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="ambientesServicios">
                        <h3>Ambientes de servicio</h3>
                        <p class="content">
                            Los ambientes de servicio se refieren a los entornos en los que se implementan y utilizan servicios informáticos. Estos ambientes pueden variar dependiendo de las necesidades y características de los servicios que se ofrecen.
                        </p>
                        <div id="ambientesIndex">
                            <ul class="index red">
                                <li><a href="#negocios">Negocios</a></li>
                                <li><a href="#industria">Industria</a></li>
                                <li><a href="#ecommerce">Comercio electronico</a></li>
                            </ul>
                            <div id="negocios">
                                <p class="content">
                                    En el contexto de la arquitectura de computadoras, los ambientes de servicios se refieren a los sistemas y componentes que se utilizan para brindar servicios a los usuarios y gestionar las operaciones de los sistemas informáticos. Estos ambientes están diseñados para garantizar un rendimiento eficiente, confiable y seguro de los servicios ofrecidos. <br>Algunos aspectos relacionados con la arquitectura de computadoras en los ambientes de servicios son:
                                </p>
                                <ul class="listContent">
                                        <li><b>Servidores:</b> En los ambientes de servicios, los servidores desempeñan un papel fundamental. Estos son computadoras de alta capacidad y potencia de procesamiento que se utilizan para almacenar y gestionar los datos, ejecutar aplicaciones y ofrecer servicios a los usuarios. Los servidores pueden estar dedicados a funciones específicas, como servidores web, servidores de bases de datos o servidores de aplicaciones.</li>
                                        <li><b>Redes de comunicación:</b> Las redes de comunicación son esenciales para conectar los diferentes componentes de un ambiente de servicios y permitir la transferencia de datos y la comunicación entre los sistemas. La arquitectura de red incluye dispositivos como routers, switches, hubs y cables que facilitan la transmisión de datos y aseguran la conectividad entre los diferentes componentes de la infraestructura.</li>
                                        <li><b>Sistemas de almacenamiento:</b> En los ambientes de servicios, es necesario contar con sistemas de almacenamiento que permitan la gestión y el acceso eficiente a los datos. Estos sistemas pueden incluir unidades de disco duro (HDD), unidades de estado sólido (SSD), sistemas de almacenamiento en red (NAS) o sistemas de almacenamiento en la nube. La arquitectura de almacenamiento se encarga de organizar y gestionar los datos de manera segura y eficiente.</li>
                                        <li><b>Virtualización:</b> La virtualización es una técnica ampliamente utilizada en los ambientes de servicios para optimizar el uso de los recursos de hardware y simplificar la gestión de los sistemas. Mediante la virtualización, es posible crear múltiples instancias virtuales de sistemas operativos, aplicaciones y servicios en un solo servidor físico. Esto permite una mayor flexibilidad, escalabilidad y eficiencia en la gestión de los servicios.</li>
                                        <li><b>Seguridad:</b> En los ambientes de servicios, la seguridad de los datos y la protección contra amenazas externas son aspectos críticos. La arquitectura de seguridad incluye medidas como firewalls, sistemas de detección de intrusiones, cifrado de datos y autenticación para garantizar la integridad y confidencialidad de los servicios y la información de los usuarios.</li>
                                        <li><b>Gestión de carga y equilibrio de carga:</b> En entornos de servicios con alta demanda, es necesario gestionar la carga de trabajo de manera eficiente para garantizar un rendimiento óptimo. La arquitectura de gestión de carga y equilibrio de carga se encarga de distribuir la carga de trabajo entre los servidores disponibles de manera equitativa, evitando la sobrecarga de recursos y asegurando un rendimiento eficiente de los servicios.</li>
                                </ul>
                                <div class="imgWithText">
                                    <img src="media/imgs/servidor.jpg" alt="" class="contentImgs">
                                    <p class="content">Servidor</p>
                                </div>
                            </div>
                            <div id="industria">
                                <p class="content">
                                    En la industria, los ambientes de servicio basados en la arquitectura de computadoras desempeñan un papel crucial en el control, la supervisión y la gestión de los procesos industriales. Estos ambientes están diseñados para proporcionar una infraestructura de computación confiable y eficiente que permita el funcionamiento óptimo de los sistemas industriales.
                                    <br>Algunos aspectos clave de los ambientes de servicio en la industria basados en la arquitectura de computadoras incluyen:
                                </p>
                                <ul class="listContent">
                                      <li><b>Sistemas de control y supervisión:</b> Los sistemas de control y supervisión se utilizan para monitorear y controlar los procesos industriales en tiempo real.</li>
                                        <li><b>Redes industriales:</b> Las redes industriales proporcionan la infraestructura de comunicación necesaria para conectar y coordinar los dispositivos y sistemas en el entorno industrial.</li>
                                        <li><b>Sistemas de adquisición de datos:</b> Los sistemas de adquisición de datos recopilan información de sensores y dispositivos en tiempo real y la convierten en datos digitales que se pueden utilizar para el control y la toma de decisiones.</li>
                                        <li><b>Servidores y almacenamiento:</b> Los servidores y sistemas de almacenamiento desempeñan un papel fundamental en los ambientes de servicio en la industria.</li>
                                        <li><b>Seguridad y protección:</b> La seguridad es un aspecto crítico en los ambientes de servicio en la industria.</li>
                                        <li><b>Gestión y supervisión de sistemas:</b> Los ambientes de servicio en la industria requieren de herramientas de gestión y supervisión para monitorear y administrar eficientemente los sistemas y recursos.</li>
                                </ul>
                                <img src="media/imgs/redes.jpg" alt="" class="contentImg">
                            </div>
                            <div id="ecommerce">
                                <p class="content">
                                    En el contexto del comercio electrónico (e-commerce), los ambientes de servicio se refieren a la infraestructura tecnológica necesaria para respaldar y gestionar las operaciones de una tienda en línea. La arquitectura de computadoras en este entorno se centra en proporcionar una plataforma confiable, escalable y segura para facilitar el comercio electrónico.<br> Algunos aspectos clave de los ambientes de servicio en e-commerce basados en la arquitectura de computadoras incluyen:
                                </p>
                                <ul class="listContent">
                                     <li><b>Servidores web:</b> Los servidores web son la columna vertebral de una tienda en línea. Se encargan de gestionar las solicitudes de los clientes, procesar transacciones, almacenar y recuperar datos, y ofrecer una interfaz para que los usuarios naveguen por los productos y realicen compras.</li>
                                      <li><b>Base de datos:</b> Una base de datos robusta y eficiente es esencial para el almacenamiento y la gestión de información crítica en un entorno de e-commerce. La base de datos almacena datos de productos, información de clientes, historial de pedidos y otra información relevante para el negocio.</li>
                                      <li><b>Seguridad:</b> Dado que el e-commerce implica la transferencia de datos sensibles, la seguridad es de vital importancia. La arquitectura de computadoras en los ambientes de servicio en e-commerce incluye medidas de seguridad como certificados SSL/TLS para cifrar las comunicaciones, cortafuegos (firewalls) para proteger contra ataques externos y sistemas de detección de intrusos para salvaguardar la integridad de los datos.</li>
                                      <li><b>Almacenamiento y recuperación de datos:</b> Los ambientes de servicio en e-commerce requieren sistemas de almacenamiento eficientes y escalables para manejar grandes volúmenes de datos. Esto puede incluir sistemas de almacenamiento en la nube, bases de datos distribuidas o almacenamiento en caché para mejorar el rendimiento de las consultas de datos.</li>
                                      <li><b>Gestión de contenido:</b> En un entorno de e-commerce, la gestión de contenido es crucial para administrar la información de productos, imágenes, descripciones y otras características relevantes. La arquitectura de computadoras debe incluir sistemas que permitan la creación, edición y publicación de contenido de manera eficiente.</li>
                                      <li><b>Servicios de pago y transacciones:</b> Los ambientes de servicio en e-commerce deben contar con sistemas de procesamiento de pagos seguros y confiables. Esto implica la integración de pasarelas de pago, sistemas de procesamiento de tarjetas de crédito u otros métodos de pago en línea.</li>
                                </ul>
                                <img src="media/imgs/ecommerce.jpg" alt="" class="contentImgs">
                            </div>
                        </div>
                    </div>
                </div>
    `
)

$("#unidad4").html(
    `
        <p><span class="temario" id="changeUnidad4">&nbsp;</span></p>
        <h2>Procesamiento paralelo</h2>
        <p class="content">
            El procesamiento paralelo se refiere a la ejecución simultánea de múltiples tareas o instrucciones en un sistema computacional. En lugar de procesar una tarea a la vez, el procesamiento paralelo utiliza recursos adicionales para realizar varias tareas de forma simultánea, lo que permite acelerar el tiempo de procesamiento y mejorar el rendimiento general del sistema
        </p>
        <div id="unidad4-tabs">
            <ul class="mainIndex">
                <li><a href="#aspectosBasicos">Aspectos basicos de la computacion paralela</a></li>
                <li><a href="#tiposComputoParalela">Tipos de computacion paralela</a></li>
                <li><a href="#sistemaMemoriaComp">Sistema de memoria compartida</a></li>
                <li><a href="#sistemaMemoriaDist">Sistema de memoria distribuida</a></li>
                <li><a href="#casosEstudio">Casos para estudio</a></li>
            </ul>
            <div id="aspectosBasicos">
                <p class="content">
                La computación paralela es un enfoque de procesamiento de datos que utiliza múltiples recursos de computación trabajando en conjunto para resolver un problema o realizar una tarea de manera más rápida y eficiente.<br>Algunos aspectos básicos de la computación paralela son:
                </p>
                <img src="media/imgs/paralelo.jpg" alt="" class="contentImgs">
                <div id="aspectosBasicosIndex">
                    <ul class="index red">
                        <li><a href="#paralelismo">Paralelismo</a></li>
                        <li><a href="#tiposParalelismo">Tipos de paralelismo</a></li>
                        <li><a href="#arquitecturaParalela">Arquitecturas paralelas</a></li>
                        <li><a href="#programacionparalela">Programacion paralela</a></li>
                        <li><a href="#beneficiosComputoParalela">Beneficios de la computacion paralela</a></li>
                    </ul>
                    <div id="paralelismo">
                        <p class="content"> El paralelismo es el concepto central de la computación paralela. Consiste en dividir una tarea en partes más pequeñas y ejecutarlas simultáneamente en múltiples procesadores o núcleos de procesamiento. Esto permite que varias tareas se realicen al mismo tiempo, lo que puede mejorar significativamente la velocidad de procesamiento.</p>
                    </div>
                    <div id="tiposParalelismo">
                        <p class="content">Hay diferentes tipos de paralelismo en la computación paralela, como el paralelismo de datos, el paralelismo de tareas y el paralelismo de instrucciones. El paralelismo de datos implica dividir los datos en pequeñas partes y procesarlas simultáneamente. El paralelismo de tareas implica dividir una tarea en sub-tareas más pequeñas y asignarlas a diferentes procesadores. El paralelismo de instrucciones implica la ejecución simultánea de múltiples instrucciones en diferentes unidades de procesamiento.</p>
                    </div>
                    <div id="arquitecturaParalela">
                        <p class="content">Existen diferentes arquitecturas de hardware para la computación paralela, como multiprocesadores, clústeres de computadoras, sistemas de memoria compartida (SMP), sistemas de memoria distribuida (MPP) y sistemas de memoria global (NUMA). Estas arquitecturas están diseñadas para soportar la ejecución simultánea de múltiples hilos o procesos.</p>
                    </div>
                    <div id="programacionparalela">
                        <p class="content">Para aprovechar al máximo la computación paralela, se requiere programación paralela. Esto implica dividir la tarea en sub-tareas que pueden ejecutarse en paralelo y coordinar la comunicación y sincronización entre las diferentes partes del programa. Se utilizan diferentes modelos de programación paralela, como hilos, procesos, directivas de compilador y bibliotecas paralelas.</p>
                    </div>
                    <div id="beneficiosComputoParalela">
                        <p class="content">La computación paralela ofrece varios beneficios, como una mayor velocidad de procesamiento, capacidad de procesar grandes volúmenes de datos en un tiempo más corto, capacidad de resolver problemas más complejos y capacidad de aprovechar eficientemente los recursos de hardware disponibles.</p>
                    </div>
                </div>
            </div>
            <div id="tiposComputoParalela">
                <p class="content">La computación paralela se refiere a la ejecución simultánea de tareas en múltiples recursos de computación. Hay varios enfoques para lograr la paralelización, como el paralelismo a nivel de bit, instrucción, dato, tarea y memoria. Cada enfoque se utiliza según el tipo de operaciones que se deben realizar y la estructura de los datos. La computación paralela permite mejorar la velocidad y eficiencia en la resolución de problemas al dividir el trabajo entre múltiples procesadores o núcleos de procesamiento.</p>
                <div id="tiposParaleloIndex">
                    <ul class="index red">
                        <li><a href="#clasificacion">Clasificacion</a></li>
                        <li><a href="#arquitecturaSecuenciales">Arquitectura de computadores secuenciales</a></li>
                        <li><a href="#organizacionDirMemoria">Organizacion de direcciones de memoria</a></li>
                    </ul>
                    <div id="clasificacion">
                        <p class="content">Los tipos de computación paralela se pueden clasificar en función de cómo se organiza y distribuye el trabajo entre los procesadores.Una clasificación general de los tipos de computación paralela puede ser:</p>
                        <ul class="listContent">
                            <li><b>Paralelismo a nivel de bit:</b> Se realizan operaciones simultáneas en los bits individuales de los datos. Este tipo de paralelismo se encuentra en procesadores vectoriales y SIMD (Single Instruction, Multiple Data).</li>
                            <li><b>Paralelismo a nivel de instrucción:</b> Se ejecutan múltiples instrucciones simultáneamente en diferentes unidades de procesamiento. Este enfoque se utiliza en procesadores superescalares y en arquitecturas con múltiples núcleos.</li>
                            <li><b>Paralelismo a nivel de dato:</b> Se divide un conjunto de datos en partes más pequeñas y se procesan simultáneamente en múltiples procesadores o núcleos. Cada procesador realiza operaciones en su subconjunto de datos asignado. Es común en aplicaciones de procesamiento de imágenes y análisis de big data.</li>
                            <li><b>Paralelismo a nivel de tarea:</b> Se divide una tarea en sub-tareas más pequeñas y se asignan a diferentes procesadores para su ejecución simultánea. Cada sub-tarea puede ser independiente y realizar una parte específica de la tarea global. Se utiliza en aplicaciones con múltiples tareas que se pueden realizar al mismo tiempo, como la renderización de gráficos en tiempo real.</li>
                            <li><b>Paralelismo a nivel de memoria:</b> Se utilizan múltiples nodos o sistemas con su propia memoria para procesar datos de manera independiente. Cada nodo tiene su propia memoria local y realiza operaciones en su conjunto de datos asignado. La comunicación y la sincronización entre los nodos se realizan a través de redes de interconexión. Este enfoque se encuentra en sistemas de memoria distribuida y sistemas de memoria global.</li>
                        </ul>
                        <p class="content">
                            Estas son algunas categorías generales de computación paralela, y en la práctica, a menudo se combinan diferentes enfoques para aprovechar al máximo los recursos de hardware disponibles y resolver problemas de manera eficiente.
                        </p>
                    </div>
                    <div id="arquitecturaSecuenciales">
                        <p class="content">La arquitectura de computadoras secuenciales se refiere a un tipo de diseño de hardware en el que las instrucciones se ejecutan de manera secuencial, es decir, una después de la otra.<br>Algunos aspectos clave de la arquitectura de computadoras secuenciales son:</p>
                        <ul class="listContent">
                            <li><b>Unidad de Control (UC):</b> La UC es responsable de controlar y coordinar las operaciones de la computadora. Se encarga de buscar las instrucciones de la memoria, decodificarlas y enviar señales a las unidades de ejecución correspondientes.</li>
                            <li><b>Unidad Aritmético-Lógica (ALU):</b> La ALU es responsable de realizar operaciones aritméticas y lógicas, como sumas, restas, multiplicaciones y comparaciones. Es el componente que realiza las operaciones fundamentales en la ejecución de instrucciones.</li>
                            <li><b>Registros:</b> Los registros son ubicaciones de almacenamiento de alta velocidad ubicadas en la CPU. Se utilizan para almacenar datos e instrucciones temporales que se están procesando. Los registros incluyen el contador de programa (PC), que mantiene la dirección de la siguiente instrucción a ejecutar.</li>
                            <li><b>Memoria principal:</b> La memoria principal almacena tanto las instrucciones como los datos que se están procesando. Las instrucciones se almacenan en una parte de la memoria llamada memoria de programa, mientras que los datos se almacenan en otra parte conocida como memoria de datos.</li>
                            <li><b>Bus de datos y bus de control:</b> Estos buses son canales de comunicación utilizados para transferir datos y señales de control entre los diferentes componentes de la computadora. El bus de datos transporta los datos que se deben leer o escribir en la memoria o en los registros, mientras que el bus de control lleva las señales de control que indican las operaciones a realizar.</li>
                            <li><b>Pipeline:</b> Algunas arquitecturas secuenciales pueden utilizar técnicas de pipeline para mejorar el rendimiento. El pipeline divide las instrucciones en etapas y permite que varias instrucciones se ejecuten en paralelo, lo que acelera el procesamiento.</li>
                        </ul>
                    </div>
                    <div id="organizacionDirMemoria">   
                        <p class="content">La organización de direcciones de memoria se refiere a la forma en que se asignan y gestionan las direcciones de memoria en un sistema de computadora.<br> Algunos aspectos clave de la organización de direcciones de memoria:</p>
                        <ol class="listContent">
                            <li><b>Tamaño de palabra:</b> El tamaño de palabra se refiere al número de bits que se pueden leer o escribir en una sola operación de memoria. Puede ser de 8 bits (byte), 16 bits (word), 32 bits (double word) o 64 bits (quad word), entre otros tamaños comunes. El tamaño de palabra influye en la capacidad de direccionamiento y en la cantidad de datos que se pueden acceder simultáneamente.</li>
                            <li><b>Espacio de direcciones:</b> El espacio de direcciones es el rango total de direcciones de memoria disponibles en un sistema. Determina la capacidad de almacenamiento que se puede abordar directamente. El tamaño del espacio de direcciones depende de la arquitectura y puede variar entre sistemas. Por ejemplo, en una arquitectura de 32 bits, el espacio de direcciones puede ser de 4 GB.</li>
                            <li><b>Direcciones físicas y virtuales:</b> En sistemas con memoria virtual, se utiliza una traducción de direcciones para mapear las direcciones virtuales (utilizadas por los programas) a direcciones físicas (utilizadas por la memoria real). Esto permite una mayor flexibilidad y protección de la memoria, ya que los programas se ejecutan en un espacio de direcciones virtual aislado.</li>
                            <li><b>Modos de direccionamiento:</b> Los modos de direccionamiento definen cómo se especifican las direcciones de memoria en las instrucciones del programa. Pueden incluir direccionamiento directo, indirecto, indexado, basado en registros, entre otros. Cada modo tiene su propia forma de calcular y acceder a las direcciones de memoria.</li>
                            <li><b>Organización jerárquica:</b> La memoria se organiza en una estructura jerárquica que incluye niveles de caché, memoria principal y almacenamiento secundario (como discos duros). Cada nivel tiene diferentes tiempos de acceso y capacidades de almacenamiento. La jerarquía de memoria se utiliza para optimizar el rendimiento accediendo primero a los niveles de memoria más rápidos y cercanos al procesador.</li>
                            <li><b>Alineación de memoria:</b> La alineación de memoria se refiere a la forma en que los datos se almacenan en la memoria. Los datos suelen estar alineados en direcciones de memoria que son múltiplos del tamaño de palabra. La alineación de memoria puede afectar el rendimiento y la eficiencia del acceso a datos.</li>
                        </ol>
                        <p class="content">
                        La organización de direcciones de memoria es un aspecto fundamental en el diseño de sistemas de computadoras, ya que afecta la capacidad de almacenamiento, la eficiencia del acceso a los datos y la seguridad de la memoria
                        </p>
                    </div>
                </div>
            </div>
            <div id="sistemaMemoriaComp">
                <p class="content">Un sistema de memoria compartida permite a múltiples procesadores o núcleos acceder a un espacio de memoria común, facilitando el intercambio de datos y la programación paralela. Aunque presenta desafíos en términos de sincronización y rendimiento, sigue siendo una arquitectura ampliamente utilizada en sistemas multiprocesador y en entornos de computación paralela.</p>
                <div id="sisMemCompTab">
                    <ul class="index red">  
                        <li><a href="#multiprocesadores">Multiprocesadores</a></li>
                        <li><a href="#redesInterconDin">Redes de interconexion dinamica</a></li>
                        <li><a href="#medioCompartido">Medio compartido</a></li>
                        <li><a href="#conmutadas">Conmutadas</a></li>
                    </ul>
                    <div id="multiprocesadores">
                    <p class="content">
                        Los sistemas de memoria compartida multiprocesadores (SMP, por sus siglas en inglés: Symmetric Multiprocessing) son arquitecturas de computadoras en las cuales múltiples procesadores o núcleos comparten un espacio de memoria física común. En este tipo de sistemas, todos los procesadores tienen acceso directo a la misma memoria principal, lo que les permite compartir datos y comunicarse de manera eficiente.
                        En un sistema SMP, cada procesador tiene igualdad de acceso a la memoria y puede ejecutar cualquier tarea. No hay una jerarquía de procesadores maestros o esclavos, y todos pueden realizar tanto operaciones de lectura como de escritura en cualquier dirección de memoria. Esto significa que cualquier procesador puede acceder a cualquier dato en la memoria compartida sin restricciones.
                        Los sistemas SMP son especialmente útiles en entornos donde se requiere un alto rendimiento computacional y una capacidad de procesamiento paralelo eficiente. Estos sistemas pueden escalar agregando más procesadores a la arquitectura, lo que permite realizar tareas intensivas en computación de manera más rápida y eficiente.
                        La ventaja principal de los sistemas SMP es su simplicidad de programación. Los programadores pueden desarrollar aplicaciones paralelas sin tener que preocuparse por la distribución explícita de datos o la sincronización compleja entre procesadores. La memoria compartida proporciona un mecanismo natural para compartir información entre los procesadores, lo que facilita el desarrollo de software paralelo y acelera el tiempo de desarrollo.
                        Sin embargo, los sistemas SMP también tienen desafíos. A medida que se agrega más procesadores, puede haber problemas de latencia y congestión en la memoria compartida, lo que puede afectar el rendimiento global del sistema. Además, la sincronización de acceso a memoria compartida puede introducir cuellos de botella si no se maneja adecuadamente, ya que múltiples procesadores pueden intentar acceder simultáneamente a los mismos datos.
                        Para mitigar estos desafíos, los sistemas SMP a menudo implementan técnicas de caché coherente, donde cada procesador tiene su propia caché para almacenar copias de datos utilizados con frecuencia. Estas cachés se coordinan para mantener la coherencia de los datos compartidos, asegurando que todos los procesadores vean los cambios realizados por otros procesadores en la memoria compartida.
                    </p>
                    <img src="media/imgs/multiprocesador.jpg" alt="" class="contentImgs">
                    </div>
                    <div id="redesInterconDin">
                        <p class="content">
                            Las redes de interconexión dinámica (DIN, por sus siglas en inglés: Dynamic Interconnection Networks) son un tipo de arquitectura de computadoras utilizada en sistemas multiprocesador y en computación de alto rendimiento. Estas redes permiten la conexión y comunicación eficiente entre los nodos o procesadores del sistema, adaptándose de forma dinámica a las necesidades de procesamiento y a las condiciones de carga de trabajo.
                            En una red de interconexión dinámica, los nodos o procesadores están conectados mediante un conjunto de enlaces o canales de comunicación. La topología de la red puede variar y adaptarse según los requisitos de rendimiento y la configuración del sistema. Algunas topologías comunes incluyen mallas (mesh), árboles (tree), anillos (ring), hipercubos (hypercube), entre otras.
                            La principal característica de las redes de interconexión dinámica es su capacidad para adaptarse y reconfigurarse en tiempo real. Esto significa que la topología de la red puede modificarse durante la ejecución de las aplicaciones o según las necesidades de comunicación de los procesadores. Por ejemplo, se pueden abrir o cerrar enlaces, reconfigurar rutas de comunicación o asignar dinámicamente recursos de red según las demandas del sistema.
                            Esta flexibilidad y adaptabilidad de las redes de interconexión dinámica permiten optimizar el rendimiento y la eficiencia de los sistemas multiprocesador. Al ajustar la topología y la configuración de la red en función de la carga de trabajo, se pueden minimizar las latencias de comunicación, reducir los cuellos de botella y maximizar el rendimiento global del sistema.
                            Las redes de interconexión dinámica también pueden incorporar mecanismos de enrutamiento inteligente y técnicas avanzadas de conmutación para mejorar el flujo de datos y la escalabilidad. Estos mecanismos permiten seleccionar las rutas óptimas y minimizar las interferencias entre los nodos, optimizando así la comunicación entre los procesadores y evitando congestiones o bloqueos en la red.
                        </p>
                        <img src="media/imgs/conexionInter.png" alt="" class="bigImgs">
                    </div>
                    <div id="medioCompartido">
                        <p class="content">
                            El medio compartido se refiere a un recurso de red que es compartido por múltiples dispositivos o usuarios para transmitir datos. En el contexto de las redes de comunicación, el medio compartido puede ser un canal físico, como un cable o una banda de frecuencia, que se utiliza para transmitir señales de datos entre los dispositivos conectados.
                            Cuando varios dispositivos comparten el mismo medio, es necesario establecer un protocolo de acceso al medio para evitar colisiones y garantizar un uso eficiente del recurso.<br> Algunos ejemplos de medios compartidos son:
                        </p>
                        <ul class="listContent">
                            <li><b>Ethernet:</b> En las redes Ethernet, los dispositivos comparten el mismo cable de red para transmitir datos. Se utiliza el protocolo de acceso al medio conocido como CSMA/CD (Carrier Sense Multiple Access with Collision Detection), que permite a los dispositivos escuchar el medio antes de transmitir para evitar colisiones. Si se detecta una colisión, los dispositivos esperan un tiempo aleatorio antes de volver a intentar la transmisión.</li>
                            <li><b>Medios inalámbricos:</b> En las redes inalámbricas, como las redes Wi-Fi, el medio compartido es el espectro de frecuencia utilizado para la transmisión de datos. Varios dispositivos comparten las mismas frecuencias para enviar y recibir señales inalámbricas. Se utilizan protocolos de acceso al medio, como CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance), para evitar colisiones y administrar el acceso equitativo al medio inalámbrico.</li>
                            <li><b>Medios satelitales:</b> En las comunicaciones satelitales, múltiples usuarios comparten el mismo satélite como medio de transmisión. Los datos se transmiten desde los usuarios a través de enlaces ascendentes al satélite, y luego se retransmiten a los usuarios a través de enlaces descendentes. Los sistemas de acceso múltiple por división de tiempo (TDMA) y acceso múltiple por división de frecuencia (FDMA) se utilizan para permitir que varios usuarios compartan el mismo ancho de banda del satélite.</li>
                        </ul>
                        <img src="media/imgs/medioCompartido.jpg" alt="" class="bigImgs">
                    </div>
                    <div id="conmutadas">
                        <p class="content">
                            En un sistema de memoria compartida conmutada, varios nodos o procesadores se conectan a una memoria compartida centralizada a través de un conmutador. Cada nodo tiene acceso directo a la memoria compartida y puede leer o escribir datos en ella. Este tipo de sistema permite que múltiples nodos accedan a los mismos datos en tiempo real, lo que facilita la comunicación y la sincronización entre los procesadores.
                            El conmutador actúa como un punto central de conexión, permitiendo que los nodos se comuniquen entre sí y accedan a la memoria compartida de manera eficiente. El conmutador puede ser un dispositivo de hardware dedicado diseñado específicamente para esta función, o puede estar implementado a nivel de software en un sistema distribuido.
                            Cuando un nodo desea acceder a un área específica de la memoria compartida, envía una solicitud al conmutador. El conmutador se encarga de gestionar el acceso a la memoria y garantizar que no haya conflictos entre las solicitudes de diferentes nodos. Puede utilizar algoritmos de arbitraje para decidir qué nodo tiene prioridad en el acceso a la memoria en caso de conflictos.
                            La ventaja de los sistemas de memoria compartida conmutada es que permiten un acceso rápido y directo a la memoria compartida, lo que facilita la comunicación y la cooperación entre los nodos. Esto es especialmente útil en aplicaciones que requieren un alto grado de interacción entre los procesadores, como cálculos paralelos, simulaciones científicas, bases de datos distribuidas y sistemas de tiempo real.
                            Sin embargo, también existen desafíos en los sistemas de memoria compartida conmutada, como la gestión de la coherencia de la memoria compartida, es decir, garantizar que todos los nodos vean los mismos datos en todo momento. Esto requiere protocolos y mecanismos de sincronización adecuados para mantener la coherencia de los datos en un entorno distribuido y concurrente.
                        </p>
                        <img src="media/imgs/conmutada.jpg" alt="" class="bigImgs">
                    </div>
                </div>
            </div>
            <div id="sistemaMemoriaDist">
                <p class="content">Los sistemas de memoria distribuida son aquellos en los que la memoria está distribuida entre varios nodos en una red. Cada nodo tiene su propia memoria local y los datos se almacenan y acceden de manera distribuida. Los nodos se comunican entre sí para compartir datos, lo que permite escalar horizontalmente y aumentar la disponibilidad de recursos. Sin embargo, se requieren algoritmos y protocolos para garantizar la consistencia de los datos y evitar conflictos. Estos sistemas se utilizan en bases de datos distribuidas, sistemas de almacenamiento en la nube y computación en clúster para lograr un mayor rendimiento y escalabilidad en entornos distribuidos.</p>
                <div id="sisMemDistTab">
                    <ul class="index red">
                        <li><a href="#multicomputadoras">Multicomputadores</a></li>
                        <li><a href="#redesInterconEst">Redes de interconexicon estatica</a></li>
                    </ul>
                    <div id="multicomputadoras">
                        <p class="content">
                            Los multicomputadores, también conocidos como sistemas multicomputador o clústeres, son sistemas compuestos por múltiples computadoras independientes interconectadas que trabajan juntas como una sola entidad. Estas computadoras, también llamadas nodos, se comunican y coordinan sus acciones para realizar tareas de manera paralela y distribuida.
                            En un multicomputador, cada nodo tiene su propia memoria, procesador y sistema operativo, lo que permite un alto grado de independencia y flexibilidad. Los nodos pueden ejecutar aplicaciones por separado o colaborar en la ejecución de tareas más grandes y complejas dividiéndolas en subtareas más pequeñas que se ejecutan de manera concurrente.
                            La comunicación entre los nodos se realiza a través de una red de interconexión, que puede ser tanto local como global. Esta red permite el intercambio de datos y la sincronización de actividades entre los nodos. Algunos ejemplos comunes de redes de interconexión utilizadas en multicomputadores incluyen Ethernet, InfiniBand y Myrinet.
                            Los multicomputadores son ampliamente utilizados en aplicaciones que requieren un alto rendimiento computacional, como la simulación científica, el procesamiento de datos masivos, la renderización de gráficos y la investigación en inteligencia artificial. Al aprovechar la capacidad de cómputo distribuido y paralelo de múltiples nodos, los multicomputadores pueden acelerar significativamente el tiempo de ejecución de tareas complejas al dividirlas en partes más pequeñas y procesarlas simultáneamente.
                            </p>
                            <img src="media/imgs/multicomputadora.png" alt="" class="bigImgs">
                    </div>
                    <div id="redesInterconEst">
                        <p class="content">
                            Las redes de interconexión estática son sistemas de interconexión de dispositivos en los que las conexiones entre los nodos de la red se establecen de manera fija y permanente. En este tipo de redes, la topología de la red y las rutas de comunicación entre los nodos se definen previamente y no cambian durante el funcionamiento normal de la red.
                            En las redes de interconexión estática, cada nodo de la red está conectado directamente a otros nodos específicos según la configuración establecida. Estas conexiones pueden ser cables físicos, enrutadores dedicados o cualquier otro medio de comunicación que permita la transmisión de datos.
                            Una de las ventajas de las redes de interconexión estática es su simplicidad y previsibilidad. Dado que las conexiones son fijas, no es necesario realizar configuraciones dinámicas o establecer rutas en tiempo real, lo que puede simplificar la administración de la red y reducir la complejidad de su funcionamiento.
                            Sin embargo, las redes de interconexión estática también tienen algunas limitaciones. Por un lado, la falta de flexibilidad puede dificultar la adaptación de la red a cambios en la demanda de tráfico o en la disponibilidad de recursos. Además, la presencia de conexiones fijas puede generar cuellos de botella en la red si el tráfico se concentra en ciertos enlaces o nodos específicos.
                        </p>
                    </div>
                </div>
            </div>
            <div id="casosEstudio">
                <div id="estudioIndex">
                    <ul class="index red">
                        <li><a href="#nvidia">Nvidia</a></li>
                        <li><a href="#aws">Amazon Web Services</a></li>
                        <li><a href="#googlecloud">Google Cloud Platform</a></li>
                        <li><a href="#ibm">IBM</a></li>
                    </ul>
                    <div id="nvidia">
                        <p class="content">NVIDIA es una empresa que diseña y fabrica tarjetas gráficas, procesadores y sistemas de computación de alto rendimiento. La tecnología CUDA de NVIDIA permite la computación paralela en sus tarjetas gráficas, lo que las hace ideales para aplicaciones como la inteligencia artificial, la simulación y el procesamiento de imágenes.</p>
                        <img src="media/imgs/nvidiaGpu.png" alt="" class="bigImgs">
                    </div>
                    <div id="aws">
                        <p class="content">Amazon Web Services (AWS) es un servicio de computación en la nube que ofrece una amplia variedad de opciones de computación paralela, incluyendo Amazon EC2, que permite el uso de múltiples instancias para procesamiento paralelo de grandes conjuntos de datos.</p>
                        <img src="media/imgs/aws.jpg" alt="" class="bigImgs">
                    </div>
                    <div id="googlecloud">
                        <p class="content">Google Cloud Platform es otro servicio de computación en la nube que utiliza la computación paralela para procesar grandes cantidades de datos. Google también ha desarrollado su propio procesador de inteligencia artificial llamado TPU (Tensor Processing Unit), que utiliza la computación paralela para acelerar el entrenamiento de redes neuronales.</p>
                        <img src="media/imgs/google.png" alt="" class="bigImgs">
                    </div>
                    <div id="ibm">
                        <p class="content">IBM ha desarrollado una variedad de productos y servicios de computación paralela, incluyendo el sistema de computación en paralelo IBM Blue Gene, que ha sido utilizado en aplicaciones científicas y de ingeniería, y el servidor de alto rendimiento IBM Power System AC922, que utiliza procesadores IBM POWER9 para ofrecer computación de alto rendimiento.</p>
                        <img src="media/imgs/ibm.jpg" alt="" class="bigImgs">
                    </div>
                </div>
            </div>
        </div>
    `
)