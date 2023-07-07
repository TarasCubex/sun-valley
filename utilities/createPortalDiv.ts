
export default  function createPortalDiv(){
    let portal = document?.getElementById('portal')
    if(portal) return portal
    portal = document.createElement('div')
    portal.id = 'portal'
    document.body.append(portal)
    return portal
}