export interface Translation {
  readonly landing: {
    readonly eyebrow: string;
    readonly headline: string;
    readonly lede: string;
    readonly cta: string;
    readonly note: string;
    readonly statusLabel: string;
    readonly statusValue: string;
    readonly whitelistLabel: string;
    readonly whitelistValue: string;
    readonly nextStepLabel: string;
    readonly nextStepValue: string;
  };
  readonly workspace: {
    readonly scanner: string;
    readonly unfollowQueue: string;
    readonly filter: string;
    readonly nonFollowers: string;
    readonly followers: string;
    readonly verified: string;
    readonly privateAccounts: string;
    readonly noPic: string;
    readonly clear: string;
    readonly displayed: string;
    readonly totalScanned: string;
    readonly whitelisted: string;
    readonly scanSummary: string;
    readonly pause: string;
    readonly resume: string;
    readonly unfollow: string;
    readonly nonWhitelistedTab: string;
    readonly whitelistedTab: string;
    readonly succeeded: string;
    readonly failed: string;
    readonly allDone: string;
  };
  readonly states: {
    readonly noMatches: string;
    readonly noMatchesDescription: string;
    readonly emptyWhitelist: string;
    readonly emptyWhitelistDescription: string;
    readonly queueStarting: string;
    readonly queueStartingDescription: string;
  };
  readonly toolbar: {
    readonly searchPlaceholder: string;
    readonly copy: string;
    readonly exportJson: string;
    readonly exportCsv: string;
    readonly page: string;
    readonly all: string;
    readonly settings: string;
    readonly toggleTheme: string;
    readonly language: string;
  };
}

export const en: Translation = {
  landing: {
    eyebrow: 'Local account audit',
    headline: 'Find the follows that do not follow back.',
    lede:
      'Scan your Instagram follows, surface risk signals, protect whitelisted accounts, and act only on the users you select. Everything runs in this browser session.',
    cta: 'Run scan',
    note: 'No servers · no auth · no exfiltration',
    statusLabel: 'Status',
    statusValue: 'Idle',
    whitelistLabel: 'Whitelist',
    whitelistValue: 'Protected',
    nextStepLabel: 'Next step',
    nextStepValue: 'Run scan',
  },
  workspace: {
    scanner: 'Scanner',
    unfollowQueue: 'Unfollow queue',
    filter: 'Filter',
    nonFollowers: 'Non-Followers',
    followers: 'Followers',
    verified: 'Verified',
    privateAccounts: 'Private',
    noPic: 'No Pic',
    clear: 'Clear',
    displayed: 'Displayed',
    totalScanned: 'Total scanned',
    whitelisted: 'Whitelisted',
    scanSummary: 'Scan summary',
    pause: 'Pause',
    resume: 'Resume',
    unfollow: 'Unfollow',
    nonWhitelistedTab: 'Non-Whitelisted',
    whitelistedTab: 'Whitelisted',
    succeeded: 'Succeeded',
    failed: 'Failed',
    allDone: 'All done',
  },
  states: {
    noMatches: 'No matching accounts',
    noMatchesDescription:
      'Try widening your filters or clearing the search bar — the current set excludes every scanned account.',
    emptyWhitelist: 'Whitelist is empty',
    emptyWhitelistDescription:
      'Click an avatar in the Non-Whitelisted tab to protect that account from being unfollowed.',
    queueStarting: 'Queue starting',
    queueStartingDescription:
      'Waiting for the first unfollow to land. Entries will stream in here as each request completes.',
  },
  toolbar: {
    searchPlaceholder: 'Search users',
    copy: 'Copy',
    exportJson: 'JSON',
    exportCsv: 'CSV',
    page: 'Page',
    all: 'All',
    settings: 'Settings',
    toggleTheme: 'Toggle theme',
    language: 'Language',
  },
};

export const fr: Translation = {
  landing: {
    eyebrow: 'Audit local de compte',
    headline: 'Trouve les abonnements qui ne te suivent pas en retour.',
    lede:
      'Scanne tes abonnements Instagram, repere les signaux a risque, protege ta liste blanche, et n’agit que sur les comptes selectionnes. Tout s’execute dans cette session navigateur.',
    cta: 'Lancer le scan',
    note: 'Sans serveurs · sans auth · sans exfiltration',
    statusLabel: 'Statut',
    statusValue: 'Au repos',
    whitelistLabel: 'Liste blanche',
    whitelistValue: 'Protegee',
    nextStepLabel: 'Prochaine etape',
    nextStepValue: 'Lancer le scan',
  },
  workspace: {
    scanner: 'Scanner',
    unfollowQueue: 'File d’unfollow',
    filter: 'Filtre',
    nonFollowers: 'Non-abonnes',
    followers: 'Abonnes',
    verified: 'Verifies',
    privateAccounts: 'Prives',
    noPic: 'Sans photo',
    clear: 'Vider',
    displayed: 'Affiches',
    totalScanned: 'Total scanne',
    whitelisted: 'En liste blanche',
    scanSummary: 'Resume du scan',
    pause: 'Pause',
    resume: 'Reprendre',
    unfollow: 'Se desabonner',
    nonWhitelistedTab: 'Hors liste blanche',
    whitelistedTab: 'En liste blanche',
    succeeded: 'Reussis',
    failed: 'Echoues',
    allDone: 'Termine',
  },
  states: {
    noMatches: 'Aucun compte correspondant',
    noMatchesDescription:
      'Elargis les filtres ou vide la recherche — la combinaison actuelle exclut chaque compte scanne.',
    emptyWhitelist: 'Liste blanche vide',
    emptyWhitelistDescription:
      'Clique sur un avatar dans l’onglet Hors liste blanche pour proteger ce compte d’un futur unfollow.',
    queueStarting: 'File en demarrage',
    queueStartingDescription:
      'En attente du premier unfollow. Les entrees apparaitront ici a chaque requete completee.',
  },
  toolbar: {
    searchPlaceholder: 'Rechercher des comptes',
    copy: 'Copier',
    exportJson: 'JSON',
    exportCsv: 'CSV',
    page: 'Page',
    all: 'Tout',
    settings: 'Reglages',
    toggleTheme: 'Theme',
    language: 'Langue',
  },
};

export const es: Translation = {
  landing: {
    eyebrow: 'Auditoría local de cuenta',
    headline: 'Encuentra las cuentas que no te siguen de vuelta.',
    lede:
      'Escanea tus seguidos de Instagram, detecta señales de riesgo, protege tu lista blanca y actúa solo sobre las cuentas que elijas. Todo se ejecuta en esta sesión del navegador.',
    cta: 'Ejecutar escaneo',
    note: 'Sin servidores · sin autenticación · sin exfiltración',
    statusLabel: 'Estado',
    statusValue: 'Inactivo',
    whitelistLabel: 'Lista blanca',
    whitelistValue: 'Protegida',
    nextStepLabel: 'Siguiente paso',
    nextStepValue: 'Ejecutar escaneo',
  },
  workspace: {
    scanner: 'Escáner',
    unfollowQueue: 'Cola de unfollow',
    filter: 'Filtro',
    nonFollowers: 'No te siguen',
    followers: 'Seguidores',
    verified: 'Verificados',
    privateAccounts: 'Privadas',
    noPic: 'Sin foto',
    clear: 'Limpiar',
    displayed: 'Mostrados',
    totalScanned: 'Total escaneado',
    whitelisted: 'En lista blanca',
    scanSummary: 'Resumen del escaneo',
    pause: 'Pausar',
    resume: 'Reanudar',
    unfollow: 'Dejar de seguir',
    nonWhitelistedTab: 'Fuera de lista blanca',
    whitelistedTab: 'En lista blanca',
    succeeded: 'Completados',
    failed: 'Fallidos',
    allDone: 'Terminado',
  },
  states: {
    noMatches: 'Sin cuentas coincidentes',
    noMatchesDescription:
      'Amplía los filtros o vacía la búsqueda — la combinación actual excluye todas las cuentas escaneadas.',
    emptyWhitelist: 'Lista blanca vacía',
    emptyWhitelistDescription:
      'Haz clic en un avatar de la pestaña Fuera de lista blanca para proteger esa cuenta de un futuro unfollow.',
    queueStarting: 'Cola iniciándose',
    queueStartingDescription:
      'Esperando el primer unfollow. Las entradas aparecerán aquí a medida que se completen las solicitudes.',
  },
  toolbar: {
    searchPlaceholder: 'Buscar cuentas',
    copy: 'Copiar',
    exportJson: 'JSON',
    exportCsv: 'CSV',
    page: 'Página',
    all: 'Todo',
    settings: 'Ajustes',
    toggleTheme: 'Tema',
    language: 'Idioma',
  },
};

export const pt: Translation = {
  landing: {
    eyebrow: 'Auditoria local da conta',
    headline: 'Encontre as contas que não te seguem de volta.',
    lede:
      'Escaneia os seus seguidos no Instagram, identifica sinais de risco, protege a tua lista branca e age apenas nas contas que selecionas. Tudo corre nesta sessão do navegador.',
    cta: 'Executar scan',
    note: 'Sem servidores · sem autenticação · sem exfiltração',
    statusLabel: 'Estado',
    statusValue: 'Inativo',
    whitelistLabel: 'Lista branca',
    whitelistValue: 'Protegida',
    nextStepLabel: 'Próximo passo',
    nextStepValue: 'Executar scan',
  },
  workspace: {
    scanner: 'Scanner',
    unfollowQueue: 'Fila de unfollow',
    filter: 'Filtro',
    nonFollowers: 'Não-seguidores',
    followers: 'Seguidores',
    verified: 'Verificados',
    privateAccounts: 'Privadas',
    noPic: 'Sem foto',
    clear: 'Limpar',
    displayed: 'Mostrados',
    totalScanned: 'Total escaneado',
    whitelisted: 'Em lista branca',
    scanSummary: 'Resumo do scan',
    pause: 'Pausar',
    resume: 'Retomar',
    unfollow: 'Deixar de seguir',
    nonWhitelistedTab: 'Fora da lista branca',
    whitelistedTab: 'Em lista branca',
    succeeded: 'Concluídos',
    failed: 'Falhados',
    allDone: 'Concluído',
  },
  states: {
    noMatches: 'Sem contas correspondentes',
    noMatchesDescription:
      'Alarga os filtros ou limpa a pesquisa — a combinação atual exclui todas as contas escaneadas.',
    emptyWhitelist: 'Lista branca vazia',
    emptyWhitelistDescription:
      'Clica num avatar do separador Fora da lista branca para proteger essa conta de um futuro unfollow.',
    queueStarting: 'Fila a iniciar',
    queueStartingDescription:
      'À espera do primeiro unfollow. As entradas aparecerão aqui à medida que os pedidos forem concluídos.',
  },
  toolbar: {
    searchPlaceholder: 'Pesquisar contas',
    copy: 'Copiar',
    exportJson: 'JSON',
    exportCsv: 'CSV',
    page: 'Página',
    all: 'Tudo',
    settings: 'Definições',
    toggleTheme: 'Tema',
    language: 'Idioma',
  },
};

export const de: Translation = {
  landing: {
    eyebrow: 'Lokale Konto-Prüfung',
    headline: 'Finde die Konten, die dir nicht zurück folgen.',
    lede:
      'Scanne deine Instagram-Abos, erkenne Risikosignale, schütze deine Whitelist und handle nur an den ausgewählten Konten. Alles läuft in dieser Browser-Sitzung.',
    cta: 'Scan starten',
    note: 'Keine Server · keine Anmeldung · keine Datenweitergabe',
    statusLabel: 'Status',
    statusValue: 'Inaktiv',
    whitelistLabel: 'Whitelist',
    whitelistValue: 'Geschützt',
    nextStepLabel: 'Nächster Schritt',
    nextStepValue: 'Scan starten',
  },
  workspace: {
    scanner: 'Scanner',
    unfollowQueue: 'Unfollow-Warteschlange',
    filter: 'Filter',
    nonFollowers: 'Nicht-Folgende',
    followers: 'Folgende',
    verified: 'Verifiziert',
    privateAccounts: 'Privat',
    noPic: 'Kein Foto',
    clear: 'Leeren',
    displayed: 'Angezeigt',
    totalScanned: 'Gescannt gesamt',
    whitelisted: 'Auf Whitelist',
    scanSummary: 'Scan-Zusammenfassung',
    pause: 'Pausieren',
    resume: 'Fortsetzen',
    unfollow: 'Entfolgen',
    nonWhitelistedTab: 'Nicht auf Whitelist',
    whitelistedTab: 'Auf Whitelist',
    succeeded: 'Erfolgreich',
    failed: 'Fehlgeschlagen',
    allDone: 'Fertig',
  },
  states: {
    noMatches: 'Keine passenden Konten',
    noMatchesDescription:
      'Erweitere die Filter oder leere die Suche — die aktuelle Auswahl schließt jedes gescannte Konto aus.',
    emptyWhitelist: 'Whitelist ist leer',
    emptyWhitelistDescription:
      'Klicke auf einen Avatar im Tab „Nicht auf Whitelist", um dieses Konto vor einem Unfollow zu schützen.',
    queueStarting: 'Warteschlange startet',
    queueStartingDescription:
      'Warten auf das erste Unfollow. Einträge erscheinen hier, sobald jede Anfrage abgeschlossen ist.',
  },
  toolbar: {
    searchPlaceholder: 'Konten suchen',
    copy: 'Kopieren',
    exportJson: 'JSON',
    exportCsv: 'CSV',
    page: 'Seite',
    all: 'Alle',
    settings: 'Einstellungen',
    toggleTheme: 'Theme',
    language: 'Sprache',
  },
};

export const ja: Translation = {
  landing: {
    eyebrow: 'ローカルアカウント監査',
    headline: 'フォローバックしていないアカウントを見つけよう。',
    lede:
      'Instagramのフォロー中アカウントをスキャンし、リスクシグナルを表示し、ホワイトリストを保護し、選択したユーザーのみに対して操作します。すべてこのブラウザセッション内で実行されます。',
    cta: 'スキャン実行',
    note: 'サーバーなし · 認証なし · データ外部送信なし',
    statusLabel: 'ステータス',
    statusValue: 'アイドル',
    whitelistLabel: 'ホワイトリスト',
    whitelistValue: '保護中',
    nextStepLabel: '次のステップ',
    nextStepValue: 'スキャン実行',
  },
  workspace: {
    scanner: 'スキャナー',
    unfollowQueue: 'アンフォローキュー',
    filter: 'フィルター',
    nonFollowers: '片思い',
    followers: 'フォロワー',
    verified: '認証済み',
    privateAccounts: '非公開',
    noPic: '画像なし',
    clear: 'クリア',
    displayed: '表示中',
    totalScanned: 'スキャン合計',
    whitelisted: 'ホワイトリスト',
    scanSummary: 'スキャン概要',
    pause: '一時停止',
    resume: '再開',
    unfollow: 'アンフォロー',
    nonWhitelistedTab: '非ホワイトリスト',
    whitelistedTab: 'ホワイトリスト',
    succeeded: '成功',
    failed: '失敗',
    allDone: '完了',
  },
  states: {
    noMatches: '一致するアカウントなし',
    noMatchesDescription:
      'フィルターを広げるか検索をクリアしてください — 現在の条件はスキャンされたすべてのアカウントを除外しています。',
    emptyWhitelist: 'ホワイトリストが空',
    emptyWhitelistDescription:
      '非ホワイトリストタブでアバターをクリックすると、そのアカウントを今後のアンフォローから保護できます。',
    queueStarting: 'キュー開始中',
    queueStartingDescription:
      '最初のアンフォロー完了を待機中です。各リクエストが完了するごとにエントリがここに表示されます。',
  },
  toolbar: {
    searchPlaceholder: 'アカウント検索',
    copy: 'コピー',
    exportJson: 'JSON',
    exportCsv: 'CSV',
    page: 'ページ',
    all: 'すべて',
    settings: '設定',
    toggleTheme: 'テーマ',
    language: '言語',
  },
};

export const dictionaries = { en, fr, es, pt, de, ja } as const;

export type Locale = keyof typeof dictionaries;
