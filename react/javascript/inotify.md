# inotify

## Introduction

`inotify` is used to watch files on a filesystem.

---

## Commands, settings, and files

### Maximum user watches constraint.

```
cat /proc/sys/fs/inotify/max_user_watches
```

### Sysctl configuration file.

```
vim /etc/sysctl.conf
```

### Set maximum watches in `/etc/sysctl.conf`

```
fs.inotify.max_user_watches=524288
```

### Reload sysctl.conf

```
sudo sysctl -p
```

### Find `inotify` processes.

```
ps -p $(find /proc/*/fd/* -type l -lname 'anon_inode:inotify' -print 2> /dev/null | sed -e 's/^\/proc\/\([0-9]*\)\/.*/\1/')
```

---

## References

* [VSCode](https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc)

* [Stack Overflow](https://stackoverflow.com/questions/25470672/how-to-stop-inotify-from-monitoring-a-directory)