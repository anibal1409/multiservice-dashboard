export interface LoggerConfig {
    /** Permite enviar los logs remotamente */
    allowRemoteLogging?: boolean;
    /** Habilita logs  */
    allowConsole?: boolean;
    /** URL externa para enviar los logs */
    remoteURL?: string;
}
export declare const LoggerConfigKey = "LOGGER_CONFIG";
