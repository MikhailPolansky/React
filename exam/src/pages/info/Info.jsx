export function Info () {
    return (
        <>
            <h2>Info</h2>
            <p className="text">
                Музичний плеєр розроблений з використанням бібліотеки
                для роботи з аудіофайлами react-h5-audio-player. У плеєра є 
                можливість відтворення аудіофайлів таких форматів як MP3,WAV,OGG,
                AAC,M4A,FLAC,AIFF. Також є можливість робити паузу
                та перемотування треків вперед і назад а також переходити
                до наступного чи попереднього трека. Додаток створений за допомогою React 
                версії 18.3.1 з використанням redux-toolkit,функціональних компонент та хуків.
                В додатку можна переглянути список треків а також детальну 
                інформацію про кожен трек є можливість пошуку треків за номером
                трека, виконавця або назвою також можна переглянути історію який трек
                і коли прослуховувався.
            </p>
        </>
    )
}