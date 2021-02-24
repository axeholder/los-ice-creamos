(() => {
  const refs = {
    openMapBtn: document.querySelector('[data-modal-map-open]'),
    closeMapBtn: document.querySelector('[data-modal-map-close]'),
    modalMap: document.querySelector('[data-modal-map]'),
    openFranchiseBtn: document.querySelector('[data-modal-franchise-open]'),
    closeFranchiseBtn: document.querySelector('[data-modal-franchise-close]'),
    modalFranchise: document.querySelector('[data-modal-franchise]'),
    openLocationButton: document.querySelector('[open-location-button]'),
    locationList: document.querySelector('[open-location-list]'),
    locationButtonNY: document.querySelector('[location-button-ny]'),
    locationButtonCH: document.querySelector('[location-button-ch]'),
    locationButtonLA: document.querySelector('[location-button-la]'),
  };

  refs.openMapBtn.addEventListener('click', toggleModalMap);
  refs.closeMapBtn.addEventListener('click', toggleModalMap);
  refs.openFranchiseBtn.addEventListener('click', toggleModalFranchise);
  refs.closeFranchiseBtn.addEventListener('click', toggleModalFranchise);
  refs.openLocationButton.addEventListener('click', toggleOpenLocationList);
  refs.locationButtonNY.addEventListener('click', toggleOpenLocationList);
  refs.locationButtonCH.addEventListener('click', toggleOpenLocationList);
  refs.locationButtonLA.addEventListener('click', toggleOpenLocationList);

  function toggleModalMap() {
    refs.modalMap.classList.toggle('location-backdrop-hidden');
  }

  function toggleModalFranchise() {
    refs.modalFranchise.classList.toggle('franchise-backdrop-hidden');
  }

  function toggleOpenLocationList() {
    refs.locationList.classList.toggle('location-button-list-open');
    refs.locationButtonNY.classList.toggle('button-animated-in');
    refs.locationButtonCH.classList.toggle('button-animated-in');
    refs.locationButtonLA.classList.toggle('button-animated-in');
  }
})();
