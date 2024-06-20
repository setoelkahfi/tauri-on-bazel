## Query all targets

```bash
bazel query //...
```

## Get dependency tree for a bazel target

```bash
bazel query 'deps(//src-tauri:tauri)' --nohost_deps --noimplicit_deps
```
