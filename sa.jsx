export const command = `
  ! lsof -i :5050 | \
    grep -q Dock && \
    /usr/local/bin/chunkwm --load-sa > /dev/null 2>&1
`

export const refreshFrequency = 5000

export const render = () => ""
