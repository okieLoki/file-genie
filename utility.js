let utility = {}
utility.types = {
    video: ['mp4', 'mkv', 'mov', 'avi', 'wmv', 'flv', 'webm'],
    images: ['jpeg', 'jpg', 'png', 'gif', 'tiff', 'psd', 'eps', 'raw', 'ai', 'heif', 'webp', 'bmp', 'svg'],
    audio: ['.aif', '.aiff', '.au', '.flac', '.m4a', '.m4b', '.m4p', '.mp3', '.ogg', '.opus', '.wav', '.wma'],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', 'xz'],
    documents: ['docx', 'doc', 'pdf', 'xlxs', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', 'deb']

}

module.exports = utility