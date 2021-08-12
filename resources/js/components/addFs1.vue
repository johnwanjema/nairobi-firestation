<template>
    <section>
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">FS1</h1>
                    </div>
                    <!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item">
                                <router-link to="/">Home</router-link>
                            </li>
                            <li class="breadcrumb-item active">FS1</li>
                        </ol>
                    </div>
                    <!-- /.col -->
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->
    
        <!-- Main content -->
        <section class="content">
            <!-- /.container-fluid -->
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <form>
                                    <div class="modal-body">
                                        <div class="form-group row">
                                            <div class="col-md-6">
                                                <label for="exampleInputEmail1">Date</label>
                                                <input v-model="fire.created_at" required type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter date" />
                                            </div>
                                             <div class="col-md-6">
                                                <label for="exampleInputEmail1">Time of Discovery </label>
                                                <input v-model="fire.timeOfDiscovery" required type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter Location" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-md-6">
                                                <label for="exampleInputPassword1">Discovered By </label>
                                                <input required v-model.trim="form.discoveredBy" type="text" class="form-control" id="exampleInputPassword1" placeholder="DiscoverdBy" />
                                            </div>
                                               <div class="col-md-6">
                                                <label for="exampleInputPassword1">Time Under Control </label>
                                                <input required v-model.trim="form.discoveredBy" type="text" class="form-control" id="exampleInputPassword1" placeholder="DiscoverdBy" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-md-6">
                                                <label for="exampleInputPassword1">Method Of Calling</label>
                                                <input required v-model="form.methodOfCalling" type="text" class="form-control" id="exampleInputPassword1" placeholder="Method of Calling" />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="exampleInputPassword1">Time of call to Fire Brigade</label>
                                                <input required v-model="form.methodOfCalling" type="time" class="form-control" id="exampleInputPassword1" placeholder="Method of Calling" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-md-6">
                                                <label for="exampleInputPassword1">Weather</label>
                                                <input required v-model.trim="form.time" type="text`" class="form-control" id="exampleInputPassword1" placeholder="Weather" />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="exampleInputPassword1">Time of Arrival of Fire Brigade</label>
                                                <input required v-model.trim="form.time" type="time" class="form-control" id="exampleInputPassword1" placeholder="Time of Arrival of Fire Brigade" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-md-6">
                                                <label for="exampleInputPassword1">Road Condition</label>
                                                <input required v-model.trim="form.time" type="text" class="form-control" id="exampleInputPassword1" placeholder="Road condition" />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="exampleInputPassword1">Name of Owner</label>
                                                <input required v-model.trim="form.time" type="text" class="form-control" id="exampleInputPassword1" placeholder="Name of Owner" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-md-6">
                                                <label for="exampleInputPassword1">Address</label>
                                                <input required v-model.trim="form.time" type="text" class="form-control" id="exampleInputPassword1" placeholder="Address" />
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="form-group row">
                                            <div class="col-md-6">
                                                <label for="exampleInputPassword1">Supposed Cause Condition</label>
                                                <input required v-model.trim="form.time" type="text" class="form-control" id="exampleInputPassword1" placeholder="supposed cause" />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="exampleInputPassword1">Extent of Fire</label>
                                                <input required v-model.trim="form.time" type="text" class="form-control" id="exampleInputPassword1" placeholder="extent of fire" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-md-6">
                                                <label for="exampleInputPassword1">Description</label>
                                                <input required v-model.trim="form.time" type="text" class="form-control" id="exampleInputPassword1" placeholder="description" />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="exampleInputPassword1">Description of Damage</label>
                                                <input required v-model.trim="form.time" type="text" class="form-control" id="exampleInputPassword1" placeholder="decription of damage" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-md-6">
                                                <label for="exampleInputPassword1">Method of Extinguishing Fire</label>
                                                <input required v-model.trim="form.time" type="text" class="form-control" id="exampleInputPassword1" placeholder="method of extinguishing fire" />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="exampleInputPassword1">Description of Damage</label>
                                                <input required v-model.trim="form.time" type="text" class="form-control" id="exampleInputPassword1" placeholder="description of damage" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer justify-content-between">
                                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                        <button type="submit" class="btn btn-primary">Add Fire</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.modal-content -->
            <!-- /.modal-dialog -->
        </section>
        <!-- /.content -->
    </section>
</template>

<script>
export default {
    props: ['fireId','fire'],
    data() {
        return {
            // fire: {},
            form: {}
        }
    }
}
</script>



